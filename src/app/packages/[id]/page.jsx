import React from "react";
import HeroSlider from "./_components/hero-slider";
import PlaceSee from "./_components/place-see";
import Highlights from "./_components/highlights";

const page = () => {
  return (
    <div>
    <div className="h-20 bg-primary-main/20 w-full" />
      <div className="max-w-6xl mx-auto">
        <HeroSlider />
        <PlaceSee />
        <Highlights />
      </div>
    </div>
  );
};

export default page;
