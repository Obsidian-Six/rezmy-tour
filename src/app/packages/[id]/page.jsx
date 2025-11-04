import React from "react";
import HeroSlider from "./_components/hero-slider";
import PlaceSee from "./_components/place-see";
import Highlights from "./_components/highlights";
import { pack } from "@/app/_components/packages";

export async function generateStaticParams() {
  return pack.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function Page({ params }) {
  const { id } = await params;
  const filteredPack = pack.filter((item) => item.id === Number(id))[0];
  return (
    <div>
      <div className="h-20 bg-primary-main/20 w-full" />
      {filteredPack && (
        <div key={filteredPack.id} className="max-w-6xl mx-auto">
          <HeroSlider ele={filteredPack} />
          <PlaceSee ele={filteredPack} />
          <Highlights ele={filteredPack} />
        </div>
      )}
    </div>
  );
}
