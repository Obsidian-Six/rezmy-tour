/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { IoCallSharp } from "react-icons/io5";
import { TbLoaderQuarter } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";

const HomeContact = () => {
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
    if (e.target.name === "name") {
      setIsData({
        ...isData,
        [e.target.name]: e.target.value.replace(/[^a-z ]/gi, ""),
      });
    } else if (e.target.name === "number") {
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
    console.log(isData);
    try {
      setIsLoading(true);
      const isFetch = await axios.post(
        "https://sheetdb.io/api/v1/21741j8kl2gql",
        isData
      );
      console.log(isFetch, "12345");
      setIsLoading(false);
      toast.success("Form Submitted Succesfully");
      setIsData({
        Name: "",
        Email: "",
        Contact_Number: "",
        Travel_Date: "",
        Message: "",
        Enquiry_Date: new Date().toISOString().split("T")[0],
        ContactMethod: "",
      });
    } catch (err) {
      setIsLoading(false);
      console.log(err, "error hai");
      toast.error("Error not Submitted");
    }
  };

  return (
    <>
      <ToastContainer />
      {/* <div className="max-md:p-6 my-4 max-w-6xl mx-auto shadow shadow-primary-main bg-primary-main/10 md:rounded-lg grid md:grid-cols-2" >
      <div className="max-md:hidden flex justify-center items-center h-auto relative">
      <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-md object-cover" src="/assets/images/06.avif" fill alt="" />
      </div>
      <section className="md:p-6 sm:p-4 p-2 max-md:w-full">
        <div className="flex justify-between max-md:justify-center">
          <div className=" md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-2 md:text-3xl sm:text-2xl text-xl font-bold text-primary-main">Get In Touch</h2>
          </div>
        </div>
          <p className="md:mb-8 max-md:mb-4 md:text-[16px] max-md:text-[12px] max-md:text-center">Have questions or want to book your next Tour  We’re here to help!</p>
        <div className="">
          <form onSubmit={handleSubmit} className="md:gap-6 sm:gap-4 max-md:gap-2  md:text-base text-sm">
            <div className="md:grid  grid-cols-1 w-full gap-2">
            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-primary-main" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="md:h-[40px] max-md:h-[30px] max-md:text-[14px] sm:p-2 p-1 border w-full outline-none rounded-md"
                id="name"
                placeholder="Enter your Name"
                value={isData.name}
                onChange={handleChange}
                required
              />
            </div>
              <div className="mb-3 w-full">
                <label className="block font-medium mb-[2px] text-primary-main" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="md:h-[40px] max-md:h-[30px] max-md:text-[14px] sm:p-2 p-1 border w-full outline-none rounded-md"
                  id="email"
                  placeholder="Enter your email address"
                  value={isData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 w-full">
                <label className="block font-medium mb-[2px] text-primary-main" htmlFor="number">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="number"
                  className="md:h-[40px] max-md:h-[30px] max-md:text-[14px] sm:p-2 p-1 border w-full outline-none rounded-md"
                  id="number"
                  placeholder="Enter your phone number"
                  value={isData.number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 w-full">
                <label className="block font-medium mb-[2px] text-primary-main" htmlFor="number">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="md:h-[40px] max-md:h-[30px] max-md:text-[14px] sm:p-2 bg-white p-1 border w-full outline-none rounded-md"
                  id="number"
                  placeholder="Enter your estimate date"
                  value={isData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            
            </div>
            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-primary-main" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                className="md:p-3 sm:p-2 p-1 border rounded-[5px] w-full outline-none resize-none md:h-20 max-md:h-14 sm:h-32 h-28 "
                placeholder="Enter your message"
                value={isData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <button
                type="button"
                disabled={isLoading}
                className="rounded bg-primary-main px-6 py-2.5 font-medium leading-normal text-white hover:shadow-md hover:bg-primary-main sm:w-fit w-full sm:text-base text-xs flex items-center gap-4 justify-center"
              >
                Send Message {isLoading && <TbLoaderQuarter className='animate-spin' />}
              </button>

            </div>
          </form>
        </div>
      </section>
    </div> */}

      <div className="bg-background-main pb-10">
        <div className="md:text-3xl sm:text-2xl pb-8 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center max-w-sm mx-auto w-full">
          Get In Touch
        </div>
        <div className="grid md:grid-cols-2 h-full max-w-6xl mx-auto rounded-2xl shadow-lg overflow-hidden w-full">
          <div className="relative">
            <img
              alt="A beautiful mosque with its reflection in the water during sunset"
              className="w-full h-full absolute object-cover"
              src="/assets/images/10.png"
            />
          </div>
          <div className="md:p-8 p-6 bg-white">
            <h2 className="text-2xl font-semibold mb-2 text-black-main">Your Perfect Vacation</h2>
            <h3 className="text-2xl font-semibold text-primary-main mb-6">Starts Here!</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded-lg border-[#B3B3B3]"
                  id="name"
                  placeholder="Name"
                  type="text"
                  name="Name"
                        value={isData.Name}
                        onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded-lg border-[#B3B3B3]"
                  id="email"
                  placeholder="E-mail"
                  type="email"
                  name="Email"
                  value={isData.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 flex">
                <input
                  className="w-full px-3 py-2 border rounded-r-lg"
                  placeholder="+91 Phone Number"
                  type="text"
                  name="Contact_Number"
                  value={isData.Contact_Number}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded-lg border-[#B3B3B3]"
                  id="date"
                  type="date"
                  name="Travel_Date"
                        value={isData.Travel_Date}
                        onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-3 py-2 border rounded-lg border-[#B3B3B3] resize-none"
                  id="message"
                  placeholder="Message"
                  rows={3}
                  defaultValue={""}
                  name="Message"
                  value={isData.Message}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <p className="text-gray-700">How should we contact you?</p>
                <div className="flex items-center gap-2">
                  <input
                    className="mr-2"
                    id="whatsapp1"
                    name="contact"
                    type="radio"
                  />
                  <label
                    className="mr-4 flex items-center text-green-500 gap-2"
                    htmlFor="whatsapp1"
                  >
                    <i className="fab fa-whatsapp"></i>
                    Whatsapp
                  </label>
                  <input
                    className="mr-2"
                    id="phone1"
                    name="contact"
                    type="radio"
                  />
                  <label
                    className="flex items-center gap-2 text-blue-500"
                    htmlFor="phone1"
                  >
                    <i className="fas fa-phone rotate-90"></i>
                    Phone Call
                  </label>
                </div>
              </div>
              <button
                className="md:w-96 w-40 bg-primary-main text-white py-2 rounded text-lg font-semibold"
                type="submit"
              >
                Plan My Trip
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
