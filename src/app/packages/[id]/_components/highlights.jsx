/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { tourpackagedata } from "@/app/_components/tour";
import Link from "next/link";

const Highlights = () => {
  const arr = [
    "04 Nights hotel accommodation in Park Regis Kris Kinn hotel or similar category hotel.",
    "Daily continental buffet breakfast at the hotel restaurant.",
    "Dubai Airport Arrival & Departure with PVT transfers (T1,T2&T3)",
    "Dubai Marina Dhow cruise.",
    "Dubai Half-day city tour.",
    "Burj Khalifa with 124th floor non prime tickets.",
    "Dubai Desert safari with BBQ dinner.",
    "Dubai frame with entrance ticket.",
    "Dubai VAT included.",
    "All tours are with entrance ticket and sharing transfers (SIC) (Except Dubai Airport Transfers)",
  ];

  const packagesData = [
    {
      link: "#packone",
      id: 1,
      image:
        "https://storage.googleapis.com/a1aa/image/ebNaUVVjFent5hUWT8vuppFa_Zl8q_zOTINs2w2Z9cc.jpg",
      title: "Gorgeous Dubai",
      duration: "6D/7N",
      discount: "25% Off",
      rating: 4,
      highlights: [
        "Burj Khalifa & Palm Jumeirah",
        "Luxury shopping at world-class malls",
        "Desert safaris with Dune Bashing",
        "Fine dining & Cultural Experiences",
      ],
      price: "$555",
      inrPrice: "₹44,444",
    },
    {
      link: "#packtwo",
      id: 2,
      image:
        "https://storage.googleapis.com/a1aa/image/pvcSyeqKcElkQjzOB14QrpGVe2iwmK-BUYwQBkL0ZKM.jpg",
      title: "Stunning Dubai",
      duration: "6D/7N",
      discount: "25% Off",
      rating: 5,
      highlights: [
        "Evening Dhow Cruise",
        "Enjoy a magical dinner on Dubai Creek",
        "Historic & Cultural Attractions",
        "Modern Architectural Wonders",
      ],
      price: "$999",
      inrPrice: "₹80,888",
    },
    {
      link: "#packthree",
      id: 3,
      image:
        "https://storage.googleapis.com/a1aa/image/gan8fi4IYMfVjXxAtP8yh510-y9mRMJUJ0TJl-mHKq4.jpg",
      title: "Stunning Dubai - Fantastic AbuDhabi",
      duration: "6D/7N",
      discount: "25% Off",
      rating: 4,
      highlights: [
        "Sheikh Zayed Grand Mosque",
        "Ferrari World Abu Dhabi",
        "Dubai Frame – Panoramic city views",
        "Luxury Stays & VIP Experiences",
      ],
      price: "$1333",
      inrPrice: "₹1,15,111",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-8 my-10 relative">
      <div className="col-span-3">
        <div className=" sticky top-24">
          <div className="sm:text-2xl text-xl font-semibold tracking-tight text-primary-main w-full">
            Highlights
          </div>
          <div>
            {arr.map((ele, i) => (
              <li
                key={i}
                className="text-lg list-disc font-medium text-black-main mt-5"
              >
                {ele}
              </li>
            ))}
          </div>

        </div>
      </div>
      <div className="col-span-2">
        <div className="sm:text-2xl text-xl font-semibold text-primary-main w-full">
          Other Tours You May Like
        </div>
        <div className="space-y-4 mt-5">
          {packagesData.map((pkg, i) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all transform"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-52 sm:h-56 object-cover"
                />
                <div className="absolute top-44 sm:top-48 flex justify-between w-full px-2">
                  <span className="bg-black-main text-white text-xs font-bold px-2 py-1 rounded">
                    {pkg.duration}
                  </span>
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {pkg.discount}
                  </span>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-4">
                <div className="text-lg md:text-xl font-bold mb-2 min-h-10">
                  {pkg.title}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`fas fa-star ${
                        index < pkg.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    ></i>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="text-sm text-gray-700 mb-2">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index}>• {highlight}</li>
                  ))}
                </ul>

                {/* Pricing & Button Section */}
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <div className="text-lg font-bold text-green-600">
                      {pkg.price}
                    </div>
                    <div className="text-xl sm:text-2xl text-green-600 mb-1">
                      ({pkg.inrPrice})
                    </div>
                    <div className="text-xs text-gray-500">
                      Total package cost
                    </div>
                  </div>
                  <Link
                    href={`/packages/${pkg.link}`}
                    className="bg-primary-main text-white text-sm font-bold px-4 py-2 rounded flex items-center mt-3 sm:mt-0"
                  >
                    <i className="fas fa-book mr-2"></i> View Tour
                  </Link>
                </div>

                {/* Contact Buttons */}
                <div className="grid grid-cols-4 gap-4 mt-3">
                  <Link
                    href={
                      "https://api.whatsapp.com/send?phone=+971565771119&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?"
                    }
                    className="border border-primary-main text-primary-main hover:bg-primary-main hover:text-white  p-1 rounded flex items-center justify-center w-full"
                  >
                    <img
                      src="/assets/svg/WhatsApp.svg"
                      alt=""
                      className=" my-float w-10"
                    />
                  </Link>
                  <Link
                    href={"tel:+971565771119"}
                    className="col-span-3 text-center border border-primary-main hover:bg-primary-main hover:text-white text-primary-main text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full"
                  >
                    Request Callback
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
