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
      name: 'Zayed Al-Fahim',
      img: '01.jpg',
      data: 'Incredible Dubai experience with Rezmytour! Everything was so well-organized, from the desert safari to the Burj Khalifa visit. Highly recommended for anyone visiting Dubai.'
    },
    {
      name: 'Ayesha Al-Nahyan',
      img: '02.jpg',
      data: 'Rezmytour made our Dubai trip unforgettable! The itinerary covered all the iconic landmarks, and the service was exceptional. Will definitely book again!'
    },
    {
      name: 'Omar Al-Maktoum',
      img: '01.jpg',
      data: 'Amazing trip to Dubai with Rezmytour! From luxury shopping to thrilling desert adventures, every detail was taken care of. Outstanding service and professionalism!'
    },
    {
      name: 'Leila Al-Shehhi',
      img: '02.jpg',
      data: 'Rezmytour provided us with a seamless and delightful Dubai tour experience. The Palm Jumeirah views and the Dubai Fountain show were breathtaking!'
    },
    {
      name: 'Faisal Al-Qasimi',
      img: '01.jpg',
      data: 'Fantastic Dubai vacation thanks to Rezmytour! Loved the combination of luxury and adventure, especially the Dubai Marina cruise. Can’t wait to book my next trip!'
    },
  ];
  
  return (
     <div id="review" className="relative w-full h-full max-w-6xl mx-auto md:py-10 max-md:py-5 max-md:pb-20 xl:px-10 px-6 bg-[#FEFCFB] rounded-md">
    <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full">
        <div>
            <h1 className={`md:text-3xl sm:text-2xl text-base font-bold tracking-tight text-gray-900 dark:text-black leading-9  max-md:text-center`}>Testimonial<span className="text-primary-main pt-2 text-4xl"><br />  </span></h1>
            <p className="text-[#666666] max-w-sm md:mt-6 max-md:mt-2 max-md:text-[14px] max-md:text-center">Our Clients send us bunch of smilies with our services and we love them.</p>
            <div>
              <button className='HomeSlidePrev text-primaryMain absolute md:bottom-12 bottom-2 max-md:left-1/3 -translate-y-1/2 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowLeft /></button>
              <button className='HomeSlideNext text-primaryMain absolute md:bottom-12 bottom-2 max-md:left-1/2 -translate-y-1/2 md:left-28 left-20 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowRight /></button> 
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
            <Image src={`/assets/images/blogs/${ele.img}`} alt="No Preview" fill className="object-cover rounded-full" />
          </div>
          <p className="text-[#666] md:text-base text-sm mt-6">“ {ele.data} ”</p>
          <p className="md:text-lg text-base font-medium md:mt-4 mt-4">{ele.name}</p>
        </SwiperSlide>

          ))
        }
      </Swiper>

    </div>
    </div>
  );
}

