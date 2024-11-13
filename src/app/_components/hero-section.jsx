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
      className="mySwiper relative bg-gradient-to-r from-primary-main to-heading-main text-white overflow-hidden lg:h-[40vw] md:h-[40vw] sm:h-[50vw] h-[50vw]"
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
          <div className="relative z-10 flex flex-col justify-center items-start h-full text-start max-w-5xl mx-auto md:p-0 sm:p-4 p-2">
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

// "use client";

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // import required modules
// import { EffectFade, Navigation, Pagination } from "swiper/modules";
// import Link from "next/link";
// import { londrinasketch } from "../font";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// export default function HeroSection() {
//   const arr = [
//     {
//       name: "",
//       img: "/assets/images/about-images/10.png",
//       val1: "",
//     },
//     {
//       name: "",
//       img: "/assets/images/about-images/05.jpg",
//       val1: "",
//     },
//     {
//       name: "",
//       img: "/assets/images/about-images/06.jpg",
//       val1: "",
//     },
//   ];
//   return (
//     <div className=" relative">
//       <div>
//         <button className="HomeSlidePrev1 text-primaryMain absolute bottom-2 top-1/2 md:left-10 -translate-y-1/2 z-10 hover:bg-primary-main hover:text-white md:text-xl sm:text-sm text-[10px] p-2 rounded-full border border-primary-main text-primary-main h-fit">
//           <FaArrowLeft />
//         </button>
//         <button className="HomeSlideNext1 text-primaryMain absolute bottom-2 top-1/2 right-3 -translate-y-1/2 md:right-10 z-10 hover:bg-primary-main hover:text-white md:text-xl sm:text-sm text-[10px] p-2 rounded-full border border-primary-main text-primary-main h-fit">
//           <FaArrowRight />
//         </button>
//       </div>
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         autoplay={true}
//         loop={true}
//         navigation={{
//           prevEl: `.HomeSlidePrev1`,
//           nextEl: `.HomeSlideNext1`,
//         }}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         modules={[EffectFade, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         {arr.map((ele, i) => (
//           <SwiperSlide key={i}>
//             <div
//               className="bg-cover bg-center md:h-[35vw] sm:h-[45vw]"
//               style={{
//                 backgroundImage: `url(${ele.img})`,
//               }}
//             >
//               <div className="flex items-center justify-center h-full bg-black bg-opacity-50 px-4 max-sm:p-6">
//                 <div className="text-center text-white max-w-3xl mx-auto ">
//                   <p
//                     className={`text-xs sm:text-base tracking-widest max-md:mt-10 mb-4`}
//                   >
//                     Pachmarhi ke Maze, Bas Tumhare Liye
//                   </p>
//                   <h1 className="xl:text-[3rem] lg:text-5xl sm:text-2xl text-base font-bold text-primary-main uppercase">
//                   Discover the Magic of
//                   </h1>
//                   <h2
//                     className={`xl:text-[5rem] lg:text-5xl sm:text-2xl text-base font-bold md:mb-4 mb-2 uppercase ${londrinasketch.className}`}
//                   >
//                     {`Pachmarhi`}
//                   </h2>
//                   <p className="text-xs sm:text-sm md:mb-6 max-w-2xl mx-auto mb-2">
//                   Suhana Tours and Travels offers personalized tours in Pachmarhi, showcasing its stunning nature, rich culture, and hidden gems for unforgettable adventures.
//                   </p>
//                   <Link
//                     href="#"
//                     className="bg-primary-main text-white py-2 sm:py-3 px-4 sm:px-6 rounded-sm sm:text-sm text-xs hover:bg-primary-main transition duration-300 font-medium"
//                   >
//                     Explore Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// import React from 'react'
// import { londrinasketch, montserrat } from '../font'
// import Link from 'next/link'

// const HeroSection = () => {
//   return (
//     <div
//   className="bg-cover bg-center md:h-[35vw] sm:h-[45vw]"
//   style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1520684450297-e4ee30a0cea8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
// >
//   <div className="flex items-center justify-center h-full bg-black bg-opacity-50 px-4">
//     <div className="text-center text-white max-w-3xl mx-auto ">
//       <p className={`text-xs sm:text-base tracking-widest montserrat.className`}>
//         COME TO EXPERIENCE IN TURIO
//       </p>
//       <h1 className="xl:text-[5rem] lg:text-5xl sm:text-3xl text-2xl font-bold text-primary-main uppercase">Grand Canyon</h1>
//       <h2 className={`xl:text-[5rem] lg:text-5xl sm:text-3xl text-2xl font-bold mb-4 uppercase ${londrinasketch.className}`}>
//         {`Go explore`}
//       </h2>
//       <p className="text-sm sm:text-sm mb-6 max-w-2xl mx-auto ">
//         Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis.
//         feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna
//         aliquet, suscipit turpis ut, facilisis purus.Sed convallis sit amet leo
//         quis.
//       </p>
//       <Link
//         href="#"
//         className="bg-primary-main text-white py-2 sm:py-3 px-4 sm:px-6 rounded-sm text-sm hover:bg-primary-main transition duration-300 font-medium"
//       >
//         Explore Now
//       </Link>
//     </div>
//   </div>
// </div>

//   )
// }

// export default HeroSection
