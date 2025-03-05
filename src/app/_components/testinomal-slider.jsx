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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
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
    <div
      id="review"
      className="max-w-6xl mx-auto max-md:px-6 relative my-10 md:mt-20"
    >
      <div className="mt-10 mb-5 max-md:my-5 flex justify-between items-center">
        <h2 className="md:text-3xl sm:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-black">
          Our Testimonial
        </h2>
        <div className=" flex justify-end md:absolute top-0 right-0 md:mb-8 gap-4">
          <button className="button-prev-text border-primary-main text-primary-main border hover:bg-primary-main hover:text-white rounded md:p-2 p-1 max-md:px-2">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="button-next-text border-primary-main text-primary-main border hover:bg-primary-main hover:text-white rounded md:p-2 p-1 max-md:px-2">
            <i className="fas fa-chevron-right"></i>
          </button>
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
        className=""
      >
        {rev?.map((ele, i) => (
          <SwiperSlide
            key={i}
            className="bg-white my-6  text-center p-1"
          >
            <div className="border border-primary-main/50 p-4 rounded-lg ">
              <img
                src={`/assets/images/testimonal/${ele.img}`}
                alt={`Portrait of ${ele.name}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{ele.name}</h3>
              <p className="text-gray-600">“{ele.data}”</p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
