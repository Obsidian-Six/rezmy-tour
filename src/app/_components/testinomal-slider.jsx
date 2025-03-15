/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { londrinasketch } from "../font";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCircleChevronLeft,
  FaCircleChevronRight,
} from "react-icons/fa6";
import Image from "next/image";

export default function HeroSection() {
  const rev = [
    {
      name: "Zayed Al-Fahim",
      img: "01.png",
      data: "Incredible Dubai experience with Rezmytour! Everything was so well-organized, from the desert safari to the Burj Khalifa visit. Highly recommended for anyone visiting Dubai.",
    },
    {
      name: "Ayesha Al-Nahyan",
      img: "02.png",
      data: "Rezmytour made our Dubai trip unforgettable! The itinerary covered all the iconic landmarks, and the service was exceptional. Will definitely book again!",
    },
    {
      name: "Omar Al-Maktoum",
      img: "03.png",
      data: "Amazing trip to Dubai with Rezmytour! From luxury shopping to thrilling desert adventures, every detail was taken care of. Outstanding service and professionalism!",
    },
    {
      name: "Leila Al-Shehhi",
      img: "04.png",
      data: "Rezmytour provided us with a seamless and delightful Dubai tour experience. The Palm Jumeirah views and the Dubai Fountain show were breathtaking!",
    },
    {
      name: "Faisal Al-Qasimi",
      img: "05.png",
      data: "Fantastic Dubai vacation thanks to Rezmytour! Loved the combination of luxury and adventure, especially the Dubai Marina cruise. Can’t wait to book my next trip!",
    },
  ];

  return (
    <div className="max-md:px-6 relative pb-10  bg-background-main">
      <div id="review" className="max-w-6xl mx-auto ">
        <div className=" max-md:mt-5 flex justify-center items-center">
          {/* <div className="w-full"></div> */}
          <div className="md:text-3xl sm:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center max-w-sm w-full">
            What Our Customers Say About Us
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".button-next-text",
            prevEl: ".button-prev-text",
          }}
          loop="true"
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className=" my-10"
        >
          {rev?.map((ele, i) => (
            <SwiperSlide key={i} className="bg-white mt-20  text-center p-1">
              <div className="p-4 rounded-lg relative">
                <div className="p-6">
                  <img
                    src={`/assets/images/testimonal/${ele.img}`}
                    alt={`Portrait of ${ele.name}`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover absolute -top-1/4 left-1/3"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black-main">
                  {ele.name}
                </h3>
                <p className="text-black h-full">“{ele.data}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" flex justify-center gap-4 w-full my-6">
        <button className="button-prev-text p-1">
          <FaCircleChevronLeft className="text-4xl hover:text-primary-main hover:bg-white text-[#B3B3B3] rounded-full " />
        </button>
        <button className="button-next-text p-1">
          <FaCircleChevronRight className="text-4xl hover:text-primary-main hover:bg-white text-[#B3B3B3] rounded-full " />
        </button>
      </div>

      <div className="flex bg-primary-main/30 md:p-4 p-2 items-center md:px-6 max-w-6xl mx-auto rounded-md justify-between">
        <p className="md:text-lg text-sm text-white font-bold">
          Are you the next happy customer?
        </p>
        <button className="bg-primary-main text-white md:font-bold font-medium md:p-4 md:px-10 p-1 rounded-md md:text-lg text-sm">
          Get Offers{" "}
        </button>
      </div>
    </div>
  );
}
