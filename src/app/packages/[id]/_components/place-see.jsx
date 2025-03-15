/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { tourpackagedata } from "@/app/_components/tour";

const PlaceSee = () => {
  return (
    <div className="grid grid-cols-5 gap-8 my-10">
      <div className="col-span-3 ">
        <div className="flex justify-between items-center ">
          <div className="sm:text-2xl text-xl font-semibold tracking-tight text-primary-main w-full">
            Places You’ll See
          </div>
          <div className=" flex justify-end gap-4 w-full">
            <button className="button-prev-pack ">
              <FaCircleChevronLeft className="text-3xl hover:text-primary-main hover:bg-white text-[#B3B3B3] rounded-full " />
            </button>
            <button className="button-next-pack">
              <FaCircleChevronRight className="text-3xl hover:text-primary-main hover:bg-white text-[#B3B3B3] rounded-full " />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".button-next-pack",
            prevEl: ".button-prev-pack",
          }}
          loop="true"
          spaceBetween={20}
          breakpoints={{
            420: { slidesPerView: 1 },
            740: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
          }}
        >
          {tourpackagedata.map((tour, i) => (
            <SwiperSlide key={i} className="mt-5">
              <img
                src={`/assets/images/tours/${tour.img}`}
                alt={tour.name}
                className="transition-transform transform  w-full h-48 object-cover rounded-md"
              />
              <p className="text-lg font-semibold mt-2">{tour.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex bg-primary-main/30  p-2 items-center md:px-3 max-w-6xl mx-auto rounded-md justify-between my-6">
          <p className="md:text-lg text-sm text-white font-bold">Plan your next adventure at an attractive price</p>
          <button className="bg-primary-main text-white md:font-bold font-medium md:p-4 md:px-10 p-1 rounded-md md:text-lg text-sm">Get Offers </button>
        </div>
      </div>
      <div className="col-span-2">
        <div className="sm:text-2xl text-xl font-semibold text-primary-main w-full">
          View On Map
        </div>
        <iframe
          className="rounded-2xl mt-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093675!2d144.96305761531546!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df0f89b61%3A0x4b2a3f0d2b5b44e5!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1644182747580!5m2!1sen!2sin"
          width="100%"
          height="85%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default PlaceSee;
