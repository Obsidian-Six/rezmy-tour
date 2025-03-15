/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modelSlice/modelSlice";

const PackCard = ({ ele }) => {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal());

  const [selectedRegion, setSelectedRegion] = useState("Dubai");
  return (
    <div
      key={ele.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={ele.img}
          alt={ele.name}
          className="w-full h-52 sm:h-56 object-cover"
        />
        <div className="absolute top-44 sm:top-48 flex justify-between w-full px-2">
          <span className="bg-black-main text-white text-xs font-bold px-2 py-1 rounded">
            {ele.day}D/{ele.night}N
          </span>
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            {ele.discount}25%
          </span>
        </div>
      </div>

      {/* Package Details */}
      <div className="p-4 group-hover:border-primary-main/50 rounded-b-lg border transition-all transform">
        <div className="text-lg md:text-xl font-bold mb-2 min-h-10">
          {ele.name}
        </div>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fas fa-star ${
                index < ele.rating ? "text-yellow-500" : "text-gray-300"
              }`}
            ></i>
          ))}
        </div>

        {/* Highlights */}
        <ul className="text-sm text-gray-700 mb-2">
          {ele.details.slice(0, 4).map((highlight, index) => (
            <li key={index}>• {highlight}</li>
          ))}
        </ul>

        {/* Pricing & Button Section */}
        <div className="flex flex-row justify-between items-center">
          <div>
            <div className="text-lg font-bold text-green-600">${ele.price}</div>
            <div className="text-xl sm:text-2xl text-green-600 mb-1">
              (₹{ele.indPrice})
            </div>
            <div className="text-xs text-gray-500">Total package cost</div>
          </div>
          <Link
            href={`/packages/${ele.id}`}
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
  );
};

export default PackCard;
