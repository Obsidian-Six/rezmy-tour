/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { openModal } from "../redux/modelSlice/modelSlice";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { tourpackagedata } from "./tour";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function HomeTour() {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal());
  return (
    <div className="max-w-6xl mx-auto xl:p-0 md:p-6 max-md:px-6 relative my-10">
      <div className="mt-10 max-md:mt-5 flex justify-between items-center">
        <div className="w-full max-md:hidden"></div>
        <div className="md:text-3xl sm:text-2xl text-xl font-bold tracking-tight text-black-main text-center md:w-full">
          Our Tour
        </div>
        <div className=" flex justify-end gap-4 md:w-full items-center">
          <button className="button-prev ">
            <FaCircleChevronLeft className="md:text-4xl text-3xl hover:text-primary-main hover:bg-white text-[#B3B3B3] rounded-full " />
          </button>
          <button className="button-next">
            <FaCircleChevronRight className="md:text-4xl text-3xl hover:text-primary-main hover:bg-white text-[#B3B3B3] rounded-full " />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
        loop="true"
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          850: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"
      >
        {tourpackagedata.map((tour, i) => (
          <SwiperSlide
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={`/assets/images/tours/${tour.img}`}
              alt={tour.name}
              className="transition-transform transform hover:scale-105 w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-1">
                {tour.name}
              </h2>
              <p className="text-xs text-gray-500">Starting from only</p>
              <p className="text-green-600 text-lg font-semibold mb-4">
               AED {tour.price} / ₹ {tour.price*23}
              </p>
              <div className="grid grid-cols-4 gap-4 mt-3">
                <Link
                  href={
                    "https://api.whatsapp.com/send?phone=+971565771119&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?"
                  }
                  className="border border-primary-main text-primary-main hover:text-white hover:bg-primary-main transition-transform  rounded flex items-center justify-center w-full"
                >
                   <img
                      src="/assets/svg/WhatsApp.svg"
                      alt=""
                      className=" my-float w-10"
                    />
                </Link>
                <button
                  onClick={handleOpen}
                  className="col-span-3 text-center border border-primary-main text-primary-main hover:text-white hover:bg-primary-main transition-transform text-sm font-medium px-4 py-2 rounded flex items-center justify-center w-full"
                >
                  Get Offers
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <Link
          href={"/tours"}
          className="inline-block rounded text-primary-main md:text-base sm:text-sm text-xs font-medium md:leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit md:px-10 max-md:px-5 md:mt-6 p-2 max-md:mt-2"
        >
          All Tours
        </Link>
      </div>
    </div>
  );
}
