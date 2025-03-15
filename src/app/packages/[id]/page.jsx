"use client";

import React from "react";
import HeroSlider from "./_components/hero-slider";
import PlaceSee from "./_components/place-see";
import Highlights from "./_components/highlights";
import { pack } from "@/app/_components/packages";
import { useParams } from "next/navigation";

const PackagePage = () => {
  const param = useParams();
  // console.log(param.id);
  console.log(pack,"fghjk")
  return (
    <div>
      <div className="h-20 bg-primary-main/20 w-full" />
      {pack.filter(item => item.id === Number(param.id)).map((ele, i) => (
        <div key={i} className="max-w-6xl mx-auto">
          <HeroSlider ele={ele} />
          <PlaceSee ele={ele} />
          <Highlights ele={ele} />
        </div>
      ))}
    </div>
  );
};

export default PackagePage;
