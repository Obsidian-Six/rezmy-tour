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

const HeroSlider = ({ele}) => {
  return (
    <>
    <div className="grid md:grid-cols-5 md:gap-8 gap-4 items-center">
      <div className=" md:col-span-3 max-md:w-screen">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
          loop="true"
          pagination={true}
          spaceBetween={20}
          slidesPerView = {1}
          className="md:mt-10 relative"
        >
          {/* {tourpackagedata.map((tour, i) => ( */}
            <SwiperSlide
              // key={i}
              className="md:rounded-lg"
            >
              <img
                src={ele.img}
                alt={ele.name}
                className="transition-transform transform md:w-full h-96 object-cover md:rounded-2xl"
              />
            </SwiperSlide>
          {/* ))} */}

          <div className=" flex justify-between items-center h-full w-full absolute top-0 z-10">
            <button className="button-prev ">
              <FaCircleChevronLeft className="text-4xl hover:text-primary-main hover:bg-white text-gray-600 bg-white rounded-full " />
            </button>
            <button className="button-next">
              <FaCircleChevronRight className="text-4xl hover:text-primary-main hover:bg-white text-gray-600 bg-white rounded-full " />
            </button>
          </div>
        </Swiper>
        <div>

        </div>
      </div>
      <div className="md:col-span-2 max-md:p-4">
        <p className="text-black-main md:text-4xl text-3xl font-bold">{ele.name}</p>
        <p className=" md:text-lg text-base font-semibold bg-black text-white w-fit p-2 rounded-md mt-5">{ele.night} Nights/ {ele.day} Days</p>
        <p className="text-[#27AE60] text-2xl font-semibold mt-10">₹{ele.indPrice} / ${ele.price}</p>
        <p className="text-black-main text-sm">per person on DBL/TWIN sharing basis</p>
        <div className="grid md:grid-cols-5 grid-cols-4 gap-4 mt-7">
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
                //   onClick={handleOpen}
                  className="col-span-3 text-center border border-primary-main text-primary-main hover:text-white hover:bg-primary-main transition-transform text-lg font-medium px-4 py-2 rounded flex items-center justify-center w-full"
                >
                 Request Callback
                </button>
              </div>
      </div>
    </div>
    </>
  );
};

export default HeroSlider;
