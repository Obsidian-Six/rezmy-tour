/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

export default function TourImageMarquee() {
  const arr = [
    "/assets/images/01.png",
    "/assets/images/02.png",
    "/assets/images/03.png",
    "/assets/images/05.png",
    "/assets/images/04.webp",
    "/assets/images/07.jpg",
    "/assets/images/08.png",
    "/assets/images/blogs/01.jpg",
  ];
  return (
    <>
      <div className=" bg-background-main md:py-10 py-6">
        <Marquee className="flex justify-between w-full">
          {arr.map((ele, i) => (
            <div
              key={i}
              className="md:h-52 h-32 py-1 w-full md:px-2 px-1"
            >
              <div className="bg-primary-main/30 relative h-full md:w-96 w-52 p-1 rounded-lg">
                <img
                  className="object-cover h-full w-full absolute rounded-lg top-1.5 md:left-1.5"
                  src={ele}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="bg-gradient-to-r from-[#8E2DE2] via-primary-main to-primary-main p-4">
        <div className="max-w-7xl mx-auto flex items-center px-6 md:justify-between max-md:flex-col">
          <p className="md:text-lg text-sm text-white font-bold">{`Your Dream Vacation Begins Here! ✈️`}</p>
          <div className="flex items-center md:gap-4 gap-3 max-md:mt-4">
            <button className="border-white border  text-white font-medium p-1 rounded-md">
              <img
                src="/assets/svg/WhatsApp.svg"
                alt=""
                className=" my-float w-10 max-md:scale-90"
              />
            </button>
            <button className="border-white border  text-white font-medium p-2.5 md:px-10 rounded-md md:text-lg text-base">
              Make it happen!!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
