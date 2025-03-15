/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { tourpackagedata } from "@/app/_components/tour";
import Link from "next/link";
import PackCard from "@/app/_components/card";
import { pack } from "@/app/_components/packages";
import { useParams } from "next/navigation";

const Highlights = ({ele}) => {
  const param = useParams();
  


  // const packagesData = [
  //   {
  //     link: "#packone",
  //     id: 1,
  //     image:
  //       "https://storage.googleapis.com/a1aa/image/ebNaUVVjFent5hUWT8vuppFa_Zl8q_zOTINs2w2Z9cc.jpg",
  //     title: "Gorgeous Dubai",
  //     duration: "6D/7N",
  //     discount: "25% Off",
  //     rating: 4,
  //     highlights: [
  //       "Burj Khalifa & Palm Jumeirah",
  //       "Luxury shopping at world-class malls",
  //       "Desert safaris with Dune Bashing",
  //       "Fine dining & Cultural Experiences",
  //     ],
  //     price: "$555",
  //     inrPrice: "₹44,444",
  //   },
  //   {
  //     link: "#packtwo",
  //     id: 2,
  //     image:
  //       "https://storage.googleapis.com/a1aa/image/pvcSyeqKcElkQjzOB14QrpGVe2iwmK-BUYwQBkL0ZKM.jpg",
  //     title: "Stunning Dubai",
  //     duration: "6D/7N",
  //     discount: "25% Off",
  //     rating: 5,
  //     highlights: [
  //       "Evening Dhow Cruise",
  //       "Enjoy a magical dinner on Dubai Creek",
  //       "Historic & Cultural Attractions",
  //       "Modern Architectural Wonders",
  //     ],
  //     price: "$999",
  //     inrPrice: "₹80,888",
  //   },
  //   {
  //     link: "#packthree",
  //     id: 3,
  //     image:
  //       "https://storage.googleapis.com/a1aa/image/gan8fi4IYMfVjXxAtP8yh510-y9mRMJUJ0TJl-mHKq4.jpg",
  //     title: "Stunning Dubai - Fantastic AbuDhabi",
  //     duration: "6D/7N",
  //     discount: "25% Off",
  //     rating: 4,
  //     highlights: [
  //       "Sheikh Zayed Grand Mosque",
  //       "Ferrari World Abu Dhabi",
  //       "Dubai Frame – Panoramic city views",
  //       "Luxury Stays & VIP Experiences",
  //     ],
  //     price: "$1333",
  //     inrPrice: "₹1,15,111",
  //   },
  // ];

  return (
    <div className="grid md:grid-cols-5 md:gap-8 gap-4 max-md:px-4 my-10 relative">
      <div className="md:col-span-3">
        <div className=" sticky top-24">
          <div className="sm:text-2xl text-xl font-semibold tracking-tight text-primary-main w-full">
            Highlights
          </div>
          <div>
            {ele.details.map((ele, i) => (
              <li
                key={i}
                className="md:text-lg text-base list-disc font-medium text-black-main md:mt-5 mt-4"
              >
                {ele}
              </li>
            ))}
          </div>

        </div>
      </div>
      <div className="md:col-span-2">
        <div className="sm:text-2xl text-xl font-semibold text-primary-main w-full">
          Other Tours You May Like
        </div>
        <div className="space-y-4 mt-5">
          {pack.filter(item => item.id !== Number(param.id)).map((pkg, i) => (
           <PackCard key={i} ele={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
