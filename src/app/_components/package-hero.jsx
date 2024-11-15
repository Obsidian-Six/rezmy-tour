/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const PackageHero = ({ name, img, page }) => {
  return (
    <div className="relative md:h-[30vw] max-md:h-[95vh]  text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-[#42424275]" />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center max-md:px-4 max-md:mt-4">
        <div className="font-medium text-center ">
          <p className="text-white md:text-6xl max-md:text-3xl">{name}</p>

          <div className="flex justify-center items-center gap-2 max-w-2xl mx-auto md:mt-4 max-md:mt-2">
            <Link href="/">
              <h1 className="md:text-[24px] max-md:text-[20px] text-[#FFF]">
                Home
              </h1>
            </Link>
            <p className="md:text-[24px] text-primary-main max-md:text-[20px]">{`>>`}</p>

            <h1 className="md:text-[24px] max-md:text-[20px] text-[#FFF]">
              {page}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageHero;
