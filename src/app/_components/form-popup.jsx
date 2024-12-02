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
    message:'',
    Enquiry_Date: new Date().toISOString().split("T")[0],
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
        <div
        id="contactFormModal"
        className="fixed z-20 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen bg-white/50  p-6">
            <div className="bg-primary-main w-full max-w-5xl rounded shadow-md">
              <div className="flex justify-end p-2">
                {/* Close Button */}
                <button
                  onClick={handleClose} // onClick event to close the modal
                  className="text-white text-xl"
                >
                  <RxCrossCircled />
                </button>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white px-4 text-center">Contact Us</h2>
              <form onSubmit={handleSubmit} className='grid md:grid-cols-2 gap-3 text-start  p-6'>
                <div className="md:mb-4">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    value={isData.Name}
                    onChange={handleChange}
                    placeholder='Please Enter Your Name'
                    className="w-full md:p-2 p-1 border rounded-md focus:outline-none text-black bg-white"
                    required
                  />
                </div>
                <div className="md:mb-4">
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    value={isData.Email}
                    onChange={handleChange}
                    placeholder='Please Enter Your Email'
                    className="w-full md:p-2 p-1 border rounded-md focus:outline-none text-black bg-white"
                    required
                  />
                </div>
                  <div className="md:mb-4">
                  <label
                    htmlFor="tel"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="Contact_Number"
                    value={isData.Contact_Number}
                    onChange={handleChange}
                    placeholder='Please Enter Your Number'
                    className="w-full md:p-2 p-1 border rounded-md focus:outline-none text-black bg-white"
                    required
                  />
                </div>
                  <div className="md:mb-4">
                    <label
                      htmlFor="date"
                      className="block text-white text-sm font-bold mb-2"
                    >
                     Travel Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="Travel_Date"
                      value={isData.Travel_Date}
                      onChange={handleChange}
                      placeholder='Please Enter Your Date'
                      className="w-full md:p-2 p-1 border rounded-md focus:outline-none text-black bg-white"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
              
                  {/* <div className="md:mb-4">
                    <label
                      htmlFor="date"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="enddate"
                      value={isData.enddate}
                      onChange={handleChange}
                      placeholder='Please Enter Your Date'
                      className="w-full md:p-2 p-1 border rounded-md focus:outline-none text-black bg-white"
                      required
                    />
                  </div>   */}
                {/* <div className="md:mb-4 md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={isData.message}
                    onChange={handleChange}
                    placeholder='Please Enter Your Message'
                    className="w-full md:p-2 p-1 border rounded-md focus:outline-none text-black bg-white resize-none h-32"
                    required
                  />
                </div> */}
                <button
                disabled={isLoading}
                  type="submit"
                  className="text-primary-main font-bold py-2 px-4 rounded bg-white w-fit flex items-center gap-4"
                >
                  Send Message {isLoading && <TbLoaderQuarter className='animate-spin' />}
                </button>
              </form>
            </div>
          </div>
          
        <ToastContainer autoClose={3000} closeOnClick/>
        </div>
      )}
    </>
  );
}
