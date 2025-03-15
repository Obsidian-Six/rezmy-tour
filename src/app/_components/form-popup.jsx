"use client"

import React, { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { closeModel } from '../redux/modelSlice/modelSlice';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { TbLoaderQuarter } from "react-icons/tb";

export default function FormPopup() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => 
    state.modal.isOpen
  )
  const handleClose = () => (
    dispatch(closeModel())
  )
  const [isLoading , setIsLoading] = useState(false);
  const [isData , setIsData] = useState({
    Name:'',
    Email:'',
    Contact_Number:'',
    Travel_Date:'',
    Message:'',
    Enquiry_Date: new Date().toISOString().split("T")[0],
    ContactMethod: "",
  })

  const handleChange = (e) => {
    if(e.target.name === "Name"){
      setIsData({
        ...isData,
        [e.target.name]:e.target.value.replace(/[^a-z ]/gi, ""),
      })
    }
    else if(e.target.name === "Contact_Number"){
      setIsData({
        ...isData,
        [e.target.name]:e.target.value.replace(/[^0-9 ]/gi, "")
      })
    }
    else{
      setIsData({
        ...isData,
        [e.target.name]:e.target.value,
      })

    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(isData ,"isData");
    try{
      setIsLoading(true)
      const isFetch = await axios.post("https://sheetdb.io/api/v1/21741j8kl2gql", isData);
      console.log(isFetch , "12345");
      setIsLoading(false)
      toast.success("Form Submitted Succesfully")
      setTimeout(()=> {
        handleClose()
      },3000)
      setIsData({
        Name:'',
        email:'',
        Contact_Number:'',
        Travel_Date:'',
        message:'',
        Enquiry_Date:new Date().toISOString().split("T")[0],
      })
    }
    catch(err){
      setIsLoading(false)
      console.log(err,"error hai");
      toast.error("Error not Submitted")
    }

  }

  return (
    <>
      {isOpen && ( // Conditional rendering of modal based on isOpen state
        <div className="fixed z-20 inset-0 w-full bg-black bg-opacity-50">
        <div className="z-10 p-6 rounded-lg max-w-7xl mx-auto">
            
          <div className="flex justify-center">
            <div className="bg-gradient-to-b from-primary-main to-[#8E2DE2] text-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl md:pl-4">
              <div className=" p-4 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex-1 max-md:hidden">
                <h2 className="text-xl font-semibold mb-4">
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
                      <p className="font-semibold">10+ Years of Experience</p>
                      <p>
                        A decade of crafting unforgettable travel experiences
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-book text-3xl mt-4 mr-4"></i>
                    <div>
                      <p className="font-semibold">100+ Expert Tour Guides</p>
                      <p>
                        Local experts ensuring the best insights and
                        adventures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-handshake text-3xl mt-4 mr-4"></i>
                    <div>
                      <p className="font-semibold">
                        500+ Travelers Connected
                      </p>
                      <p>
                        Bringing wanderers together for seamless journeys.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:p-8 p-4 flex-1 bg-white text-gray-700 rounded-xl relative ">
                <div className="absolute p-2 flex justify-end right-0 top-0">
                <button
                  onClick={handleClose} // onClick event to close the modal
                  className="text-primary-main text-xl"
                >
                  <RxCrossCircled />
                </button>
              </div>
                <h2 className="md:text-2xl text-xl font-semibold mb-2">
                  {"Let's Make Your Travel Easy"}
                </h2>
                <h3 className="text-xl text-primary-main mb-6">Talk to Us</h3>
                <form onSubmit={handleSubmit} className="space-y-4 max-md:overflow-y-scroll max-md:h-[70vh]">
      <div className="flex items-center border rounded-lg p-2">
        <i className="fas fa-user text-gray-400 mr-2"></i>
        <input
          className="w-full outline-none"
          placeholder="Name"
          type="text"
          name="Name"
          value={isData.Name}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center border rounded-lg p-2">
        <i className="fas fa-envelope text-gray-400 mr-2"></i>
        <input
          className="w-full outline-none"
          placeholder="E-mail"
          type="email"
          name="Email"
          value={isData.Email}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center border rounded-lg p-2">
      <i className="fa-solid fa-phone text-gray-400 mr-2"></i>
        <input
          className="w-full outline-none"
          placeholder="Phone Number"
          type="text"
          name="Contact_Number"
          value={isData.Contact_Number}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center border rounded-lg p-2">
        <i className="fas fa-calendar-alt text-gray-400 mr-2"></i>
        <input
          className="w-full outline-none"
          placeholder="Travel Date"
          type="date"
          name="date"
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
            <label className="flex items-center" htmlFor="whatsapp">
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

      <button className="w-full bg-primary-main text-white py-2 rounded-lg" type="submit">
        Plan My Trip
      </button>
    </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
