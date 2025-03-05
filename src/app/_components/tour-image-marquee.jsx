/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

export default function TourImageMarquee() {
  const arr = [
    '/assets/images/01.png',
    '/assets/images/02.png',
    '/assets/images/03.png',
    '/assets/images/05.png',
    '/assets/images/04.webp',
    '/assets/images/07.jpg',
    '/assets/images/08.png',
    '/assets/images/blogs/01.jpg',
  ];
  return (
    <Marquee className="flex justify-between w-full mb-2 mt-10">
      {arr.map((ele, i) => (
        <div key={i} className="md:h-52 sm:h-32 h-24 py-1 w-full md:px-2 px-1">
          <img
            className="object-cover h-full w-full border-2 border-primary-main rounded-lg p-0.5"
            src={ele}
            alt=""
          />
        </div>
      ))}
    </Marquee>
  );
}
