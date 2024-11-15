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
  const arr = [
    {
        img: "/assets/images/01.png",
        val1: "Your Journey Begins",
        val2: "And that’s why you’re here!",
        detail: "Explore breathtaking destinations, immerse yourself in diverse cultures, and create unforgettable memories with our carefully curated travel experiences."
    },
    {
        img: "/assets/images/hero-section/01.png",
        val1: "Discover Dubai",
        val2: "A city of wonders awaits you.",
        detail: "Uncover the charm of Dubai, a city where luxury meets tradition, offering stunning skyscrapers, thrilling adventures, and cultural treasures for every traveler."
    },
    {
        img: "/assets/images/hero-section/03.png",
        val1: "Experience Luxury",
        val2: "Beyond your imagination.",
        detail: "Indulge in the pinnacle of comfort with world-class accommodations, exquisite dining experiences, and bespoke services designed to make your stay truly special."
    },
    {
        img: "/assets/images/hero-section/02.png",
        val1: "Adventure Awaits",
        val2: "Make memories that last forever.",
        detail: "Embark on an adrenaline-filled journey with desert safaris, thrilling water sports, and unforgettable activities that bring the spirit of adventure to life."
    }
];

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
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper relative bg-gradient-to-r from-primary-main to-heading-main text-white overflow-hidden lg:h-[40vw] md:h-[40vw] sm:h-[50vw] h-[95vh]"
    >
      {
        arr.map((ele,i) => (
        <SwiperSlide key={i} className="h-full w-full">
          <div className="absolute inset-0">
            <img
              src={ele.img}
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-40" />
          </div>
          <div className="relative z-10 flex flex-col justify-center items-start h-full text-start max-w-5xl mx-auto md:p-0 sm:p-4 p-4 max-sm:text-center">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="lg:text-[3.41rem] md:text-4xl sm:text-3xl text-2xl font-bold xl:leading-tight md:mb-10 sm:mb-6 drop-shadow-[0px_4px_4px_#666666] max-md:w-full"
            >
              {ele.val1}
              <span className="md:text-heading-main md: drop-shadow-[0px_4px_4px_#C6A669]"></span>
              <span className="block">{ele.val2}</span>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className="md:text-2xl sm:text-xl text-base font-medium  md:mb-8  drop-shadow-[0px_4px_4px_#666666] max-md:mt-5"
            >
             {ele.detail}
            </p>
            <div className="md:hidden flex justify-center w-full mt-10">
              <button
          className="bg-heading-main text-primary-main hover:bg-heading-main md:py-2 md:px-6 px-4 py-2 rounded lg:text-lg sm:text-base text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
          onClick={handleOpen}
        >
          Get Free Consultation!
        </button>
            </div>
          </div>
        </SwiperSlide>

        ))
      }
    </Swiper>
  );
};

export default HeroSection;
