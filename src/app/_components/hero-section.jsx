/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
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
import { RxCrossCircled } from "react-icons/rx";
import { toast } from "react-toastify";
import axios from "axios";

const HeroSection = () => {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal());
  //   const arr = [
  //     {
  //         img: "/assets/images/hero-section/09.png",
  //         val1: "Your Journey Begins",
  //         val2: "And that’s why you’re here!",
  //         detail: "Explore breathtaking destinations, immerse yourself in diverse cultures, and create unforgettable memories with our carefully curated travel experiences."
  //     },
  //     // {
  //     //     img: "/assets/images/hero-section/01.png",
  //     //     val1: "Discover Dubai",
  //     //     val2: "A city of wonders awaits you.",
  //     //     detail: "Uncover the charm of Dubai, a city where luxury meets tradition, offering stunning skyscrapers, thrilling adventures, and cultural treasures for every traveler."
  //     // },
  //     // {
  //     //     img: "/assets/images/hero-section/03.png",
  //     //     val1: "Experience Luxury",
  //     //     val2: "Beyond your imagination.",
  //     //     detail: "Indulge in the pinnacle of comfort with world-class accommodations, exquisite dining experiences, and bespoke services designed to make your stay truly special."
  //     // },
  //     // {
  //     //     img: "/assets/images/hero-section/02.png",
  //     //     val1: "Adventure Awaits",
  //     //     val2: "Make memories that last forever.",
  //     //     detail: "Embark on an adrenaline-filled journey with desert safaris, thrilling water sports, and unforgettable activities that bring the spirit of adventure to life."
  //     // }
  // ];

  const handleClose = () => dispatch(closeModel());
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState({
    Name: "",
    Email: "",
    Contact_Number: "",
    Travel_Date: "",
    Message: "",
    Enquiry_Date: new Date().toISOString().split("T")[0],
    ContactMethod: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "Name") {
      setIsData({
        ...isData,
        [e.target.name]: e.target.value.replace(/[^a-z ]/gi, ""),
      });
    } else if (e.target.name === "Contact_Number") {
      setIsData({
        ...isData,
        [e.target.name]: e.target.value.replace(/[^0-9 ]/gi, ""),
      });
    } else {
      setIsData({
        ...isData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(isData, "isData");
    try {
      setIsLoading(true);
      const isFetch = await axios.post(
        "https://sheetdb.io/api/v1/21741j8kl2gql",
        isData
      );
      // console.log(isFetch, "12345");
      setIsLoading(false);
      toast.success("Form Submitted Succesfully");
      setIsData({
        Name: "",
        email: "",
        Contact_Number: "",
        Travel_Date: "",
        message: "",
        Enquiry_Date: new Date().toISOString().split("T")[0],
      });
    } catch (err) {
      setIsLoading(false);
      console.log(err, "error hai");
      toast.error("Error not Submitted");
    }
  };

  return (
    <>
      {/* <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper relative  text-white overflow-hidden h-screen"
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
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          </div>
          <div className="relative z-10 flex md:mt-10 flex-col justify-center items-start h-full text-start max-w-6xl mx-auto md:p-0 sm:p-4 p-4 max-sm:text-center">
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
          className="text-white bg-primary-main  md:py-2 md:px-6 px-4 py-2 rounded lg:text-lg sm:text-base text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
          onClick={handleOpen}
        >
          Get Free Consultation!
        </button>
            </div>
          </div>
        </SwiperSlide>

        ))
      }
    </Swiper> */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/images/hero-section/09.png")',
        }}
      >
        <div className="w-full bg-black bg-opacity-50 md:pt-20 pt-16 mb:pb-10">
          <div className="relative z-10  p-6 rounded-lg grid md:grid-cols-4 items-center justify-center max-w-[90rem] ml-auto">
            <p className="text-4xl md:text-6xl text-white font-bold mb-[50%] max-md:hidden ">
              Discover{" "}
              <span className="bg-gradient-to-r from-primary-main to-[#8E2DE2] bg-clip-text text-transparent pt-2 md:text-8xl font-bold">
                DUBAI
              </span>
            </p>
            <div className="md:col-span-3 flex">
              <div className="bg-gradient-to-b from-primary-main via-primary-main to-[#8E2DE2] text-white rounded-[20px] shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
                <div className=" md:p-8 p-4 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex-1 max-md:hidden text-bas">
                  <h2 className=" font-semibold mb-4">
                    Get best offers on Dubai Packages
                  </h2>
                  <img
                    alt="Scenic view of Dubai with Burj Al Arab in the background"
                    className="rounded-lg mb-4 h-60 w-full"
                    src="https://storage.googleapis.com/a1aa/image/cFfNaKYqmCDHKPRkTgfVVLgWifoqaLT9zq8D0DvGGrU.jpg"
                  />
                  <p className="mb-6">Plans starting ₹1265 only/-</p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="fas fa-trophy text-3xl mt-4 mr-4"></i>
                      <div>
                        <p className="font-normal">10+ Years of Experience</p>
                        <p>
                          A decade of crafting unforgettable travel experiences
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-book text-3xl mt-4 mr-4"></i>
                      <div>
                        <p className="font-normal">100+ Expert Tour Guides</p>
                        <p>
                          Local experts ensuring the best insights and
                          adventures.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-handshake text-3xl mt-4 mr-4"></i>
                      <div>
                        <p className="font-normal">500+ Travelers Connected</p>
                        <p>
                          Bringing wanderers together for seamless journeys.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:p-8 p-4 flex-1 bg-white text-[#757575] rounded-2xl relative ">
                  <div className="absolute p-2 flex justify-end right-0 top-0"></div>
                  <h2 className="md:text-2xl sm:text-xl text-lg font-semibold text-center text-[#1E1E1E]">
                    {"Let's Make Your Travel Easy"}
                  </h2>
                  <h3 className="md:text-2xl text-sm text-primary-main mb-6 text-center font-semibold">
                    Talk to Us
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="md:space-y-4 space-y-2"
                  >
                    <div className="flex items-center border rounded-lg md:p-2 p-1.5 md:text-base text-sm">
                      <i className="fas fa-user text-[#757575] mr-2"></i>
                      <input
                        className="w-full outline-none"
                        placeholder="Name"
                        type="text"
                        name="Name"
                        value={isData.Name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex items-center border rounded-lg md:p-2 p-1.5 md:text-base text-sm">
                      <i className="fas fa-envelope text-[#757575] mr-2"></i>
                      <input
                        className="w-full outline-none"
                        placeholder="E-mail"
                        type="email"
                        name="Email"
                        value={isData.Email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex items-center border rounded-lg md:p-2 p-1.5 md:text-base text-sm">
                      <i className="fa-solid fa-phone text-[#757575] mr-2"></i>
                      <input
                        className="w-full outline-none"
                        placeholder="Phone Number"
                        type="text"
                        name="Contact_Number"
                        value={isData.Contact_Number}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex items-center border rounded-lg md:p-2 p-1.5 md:text-base text-sm">
                      <i className="fas fa-calendar-alt text-[#757575] mr-2"></i>
                      <input
                        className="w-full outline-none"
                        placeholder="Travel Date"
                        type="date"
                        name="Travel_Date"
                        value={isData.Travel_Date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="border rounded-lg p-2">
                      <textarea
                        className="w-full outline-none md:h-24 h-16"
                        placeholder="Message:"
                        name="Message"
                        value={isData.Message}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <p>How should we contact you?</p>
                      <div className="flex gap-4 items-center my-1">
                        <div className="flex items-center">
                          <input
                            className="mr-2"
                            id="whatsapp"
                            name="contactMethod"
                            type="radio"
                            value="whatsapp"
                            checked={isData.contactMethod === "whatsapp"}
                            onChange={handleChange}
                          />
                          <label
                            className="flex items-center"
                            htmlFor="whatsapp"
                          >
                            <i className="fab fa-whatsapp text-green-500 mr-1"></i>
                            Whatsapp
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="mr-2"
                            id="phone"
                            name="contactMethod"
                            type="radio"
                            value="phone"
                            checked={isData.contactMethod === "phone"}
                            onChange={handleChange}
                          />
                          <label className="flex items-center" htmlFor="phone">
                            <i className="fas fa-phone-alt text-blue-500 mr-1"></i>
                            Phone Call
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      className="w-full bg-primary-main text-white py-2 rounded-lg"
                      type="submit"
                    >
                      Plan My Trip
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
