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

export default function HomeTour() {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal());

  return (
    <div className="max-w-6xl mx-auto xl:p-0 md:p-6 max-md:px-6 relative">
      <div className="mt-10 max-md:mt-5 flex justify-between items-center">
        <h2 className="md:text-3xl sm:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-black">
          Our Tour
        </h2>
        <div className=" flex justify-end md:absolute top-0 right-0 md:mb-8 gap-4">
          <button className="button-prev border-primary-main text-primary-main border hover:bg-primary-main hover:text-white rounded md:p-2 p-1 max-md:px-2">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="button-next border-primary-main text-primary-main border hover:bg-primary-main hover:text-white rounded md:p-2 p-1 max-md:px-2">
            <i className="fas fa-chevron-right"></i>
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
              <p className="text-sm text-gray-500 mb-2">Starting from only</p>
              <p className="text-green-600 text-xl font-bold mb-4">
                {tour.price}
              </p>
              <div className="grid grid-cols-4 gap-4 mt-3">
                <Link href={'https://api.whatsapp.com/send?phone=+971565771119&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?'} className="border border-primary-main text-primary-main text-sm hover:text-white hover:bg-primary-main transition-transform font-bold px-4 py-2 rounded flex items-center justify-center w-full">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </Link>
                <button
                  onClick={handleOpen}
                  className="col-span-3 text-center border border-primary-main text-primary-main hover:text-white hover:bg-primary-main transition-transform text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full"
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
