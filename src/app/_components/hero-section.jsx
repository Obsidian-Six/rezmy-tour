/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { londrinasketch } from "../font";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modelSlice/modelSlice";
import FormPopup from "./form-popup";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal());
  const arr = ["","",""]
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper relative bg-gradient-to-r from-primary-main to-heading-main text-white overflow-hidden lg:h-[40vw] md:h-[40vw] sm:h-[50vw] h-[55vw]"
    >
      {
        arr.map((ele,i) => (
        <SwiperSlide key={i} className="h-full w-full">
          <div className="absolute inset-0">
            <img
              src="/assets/images/01.png"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-40" />
          </div>
          <div className="relative z-10 flex flex-col justify-center items-start h-full text-start max-w-5xl mx-auto md:p-0 sm:p-4 p-6">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="lg:text-[3.41rem] md:text-4xl sm:text-3xl text-lg font-bold xl:leading-tight md:mb-10 sm:mb-6 drop-shadow-[0px_4px_4px_#666666]"
            >
              Your Journey begin{" "}
              <span className="md:text-heading-main md: drop-shadow-[0px_4px_4px_#C6A669]"></span>
              <span className="block">and that’s why you’re here!</span>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className="md:text-2xl sm:text-xl text-sm font-medium  md:mb-8  drop-shadow-[0px_4px_4px_#666666]"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              dolor vel laboriosam enim voluptas, vitae eius? Ad consectetur hic
              consequuntur?
            </p>
            <div>
              {/* <button
          className="bg-heading-main text-primary-main hover:bg-heading-main md:py-2 md:px-6 px-2 py-1 rounded-full lg:text-lg sm:text-base text-sm font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
        >
          Get Free Consultation!
        </button> */}
            </div>
          </div>
        </SwiperSlide>

        ))
      }
    </Swiper>
  );
};

export default HeroSection;
