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
      name:'Raj Verma',
      img:'',
      data:'Wonderful experience with Tour & Travels! The Pachmarhi trip was well-planned. Perfect for a peaceful and scenic holiday.'
    },
    {
      name:'Anjali Tiwari',
      img:'',
      data:'Amazing Pachmarhi tour! The itinerary covered all the must-see spots. A truly hassle-free and delightful experience!'
    },
    {
      name:'Ravi Gupta',
      img:'',
      data:'A memorable Pachmarhi trip! Tour and Travels handled everything perfectly, from transportation to accommodation. Highly professional and friendly service.'
    },
    {
      name:'Pooja Sharma',
      img:'',
      data:'Fantastic experience with Tour and Travels! Well-organized, beautiful sights, and excellent service throughout. Highly recommended for a relaxing Pachmarhi getaway!'
    },
    {
      name:'Sandeep Kumar',
      img:'',
      data:'Great tour! made the Pachmarhi trip smooth and enjoyable. Loved the scenic spots. Will definitely book with them again.'
    },
  ]
  return (
     <div id="review" className="relative w-full h-full max-w-6xl mx-auto md:py-10 max-md:py-5 xl:px-10 px-6 bg-[#FEFCFB] rounded-md">
    <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full">
        <div>
            <h1 className={`md:text-3xl sm:text-2xl text-base font-bold tracking-tight text-gray-900 dark:text-black leading-9  max-md:text-center`}>Testimonial<span className="text-primary-main pt-2 text-4xl"><br />  </span></h1>
            <p className="text-[#666666] max-w-sm md:mt-6 max-md:mt-2 max-md:text-[14px] max-md:text-center">Our Clients send us bunch of smilies with our services and we love them.</p>
            <div>
              <button className='HomeSlidePrev text-primaryMain absolute md:bottom-12 bottom-5 max-md:left-1/3 -translate-y-1/2 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowLeft /></button>
              <button className='HomeSlideNext text-primaryMain absolute md:bottom-12 bottom-5 max-md:left-1/2 -translate-y-1/2 md:left-28 left-20 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowRight /></button> 
            </div>
          </div>
      <Swiper  
        AutoPlay={true}
        loop={true} 
        spaceBetween={40}  
        navigation={{
            prevEl: `.HomeSlidePrev`,
            nextEl: `.HomeSlideNext`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full shadow-[0px_8px_16px_2px_rgba(0,0,0,0.07)] h-64 max-md:mt-4 rounded-xl"
      >
        {
          rev?.map((ele, i )=> (
        <SwiperSlide key={i} className="p-6 grid items-center h-full w-full">
          <div className="md:h-16 md:w-16 h-12 w-12 relative">
            <Image src={`/assets/images/about-images/${ele.img}`} alt="No Preview" fill className="object-cover rounded-full" />
          </div>
          <p className="text-[#666] md:text-base text-sm mt-4">“ {ele.data} ”</p>
          <p className="md:text-lg text-base font-medium md:mt-4 mt-2">{ele.name}</p>
          <p className="text-sm font-medium text-[#666666]"></p>
        </SwiperSlide>

          ))
        }
      </Swiper>

    </div>
    </div>
  );
}

