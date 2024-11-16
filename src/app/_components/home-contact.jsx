"use client"

import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { IoCallSharp } from "react-icons/io5";
import { TbLoaderQuarter } from "react-icons/tb";
// import { toast, ToastContainer } from "react-toastify";

const HomeContact = () => {
  const [isLoading , setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        date:'',
        enddate:'',
        message: ''
      });
    
      const handleChange = (e) => {
        if(e.target.name === "name"){
          setFormData({
            ...formData,
            [e.target.name]:e.target.value.replace(/[^a-z ]/gi, ""),
          })
        }
        else if(e.target.name === "number"){
          setFormData({
            ...formData,
            [e.target.name]:e.target.value.replace(/[^0-9 ]/gi, "")
          })
        }
        else{
          setFormData({
            ...formData,
            [e.target.name]:e.target.value,
          })
    
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData); 
        // try{
        //   setIsLoading(true)
        //   const isFetch = await axios.post("", formData);
        //   console.log(isFetch , "12345");
        //   setIsLoading(false)
        //   toast.success("Form Submitted Succesfully")
        //   setFormData({
        //     name:'',
        //     email:'',
        //     number:'',
        //     date:'',
        //     message:'',
        //   })
        // }
        // catch(err){
        //   setIsLoading(false)
        //   console.log(err,"error hai");
        //   toast.error("Error not Submitted")
        // }
      };
    
  return (
    <div className="md:px-4 max-md:px-6 my-4 max-w-6xl flex mx-auto shadow shadow-primary-main bg-primary-main/10 rounded-lg" >
         {/* <ToastContainer /> */}
      <section className="md:p-6 sm:p-4 p-2 md:w-[60%] max-md:w-full">
        <div className="flex justify-between max-md:justify-center">
          <div className=" md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-2 md:text-3xl sm:text-2xl text-xl font-bold text-primary-main">Get In Touch</h2>
          </div>
        </div>
          <p className="md:w-[80%] md:mb-8 max-md:mb-4 md:text-[16px] max-md:text-[12px] max-md:text-center">Have questions or want to book your next Tour  We’re here to help!</p>
        <div className="">
   
        <form onSubmit={handleSubmit} className="md:gap-6 sm:gap-4 max-md:gap-2  md:text-base text-sm">
          <div className="md:grid  grid-cols-2 w-full gap-2">
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
              value={formData.name}
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
                value={formData.email}
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
                value={formData.number}
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
                className="md:h-[40px] max-md:h-[30px] max-md:text-[14px] sm:p-2 p-1 border w-full outline-none rounded-md"
                id="number"
                placeholder="Enter your estimate date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          
          </div>
          <div className="mb-3 w-full md:col-span-3">
            <label className="block font-medium mb-[2px] text-primary-main" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              className="md:p-3 sm:p-2 p-1 border rounded-[5px] w-full outline-none resize-none md:h-20 max-md:h-14 sm:h-32 h-28 "
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:col-span-3 ">
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
      <div className="w-[40%] max-md:hidden flex justify-center items-center h-auto relative">
      <Image className="rounded-md object-cover p-4 " src="/assets/images/06.avif" fill alt="" />
      </div>
    </div>
  );
};

export default HomeContact;
