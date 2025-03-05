/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modelSlice/modelSlice";
import Link from "next/link";



export const tourpackagedata = [
    {
        img: "01.png",
        name: "Dhow Cruise with Dinner - Dubai Creek",
        oldPrice: "AED 75.00",
        price: "55.00"
    },
    {
        img: "27.png",
        name: "AYA Universe with Dubai Dhow Cruise with Dinner - Dubai Marina",
        oldPrice: "AED 150.00",
        price: "135.00"
    },
    {
        img: "02.png",
        name: "Luxury Yacht Ride - Dubai Marina",
        oldPrice: "AED 250.00",
        price: "210.00"
    },
    {
        img: "03.png",
        name: "Desert Safari",
        oldPrice: "AED 175.00",
        price: "157.50"
    },
    {
        img:"04.png",
        name: "Atlantis Aquaventure Water Park",
        oldPrice: "AED 175.00",
        price: "135.00"
    },
    {
        img:"05.png",
        name: "SeaWorld Abu Dhabi",
        oldPrice: "AED 375.00",
        price: "320.00"
    },
    {
        img:"06.png",
        name: "Dubai Dolphinarium Ticket",
        oldPrice: "AED 75.00",
        price: "55.00"
    },
    {
        img:"09.png",
        name: "The View at The Palm Jumeirah Dubai",
        oldPrice: "AED 114.00",
        price: "69.00"
    },
    {
        img:"10.png",
        name: "Abu Dhabi City Tour",
        oldPrice: "AED 135.00",
        price: "121.00"
    },
    {
        img:"11.png",
        name: "Ferrari World Theme Park with Entrance Ticket and Transfers",
        oldPrice: "AED 344.00",
        price: "295.00"
    },
    {
        img:"08.png",
        name: "Dubai Frame",
        oldPrice: "AED 50.00",
        price: "44.00"
    },
    {
        img:"07.png",
        name: "Museum of the Future",
        oldPrice: "AED 149.00",
        price: "139.00"
    },
    {
        img:"12.png",
        name: "Wild Wadi Water Park",
        oldPrice: "AED 299.00",
        price: "259.00"
    },
    {
        img:"13.png",
        name: "IMG Theme Park with Entrance Ticket and Transfers",
        oldPrice: "AED 325.00",
        price: "290.00"
    },
    {
        img:"14.png",
        name: "Dubai Aquarium & Underwater Zoo at Dubai Mall",
        oldPrice: "AED 233.00",
        price: "199.00"
    },
    {
        img:"15.png",
        name: "Global Village Dubai",
        oldPrice: "AED 25.00",
        price: "22.00"
    },
    {
        img:"16.png",
        name: "Miracle Garden",
        oldPrice: "AED 55.00",
        price: "45.00"
    },
    {
        img:"17.png",
        name: "Motiongate Dubai",
        oldPrice: "AED 325.00",
        price: "290.00"
    },
    {
        img:"18.png",
        name: "LEGOLAND Theme Park Dubai",
        oldPrice: "AED 275.00",
        price: "235.00"
    },
    {
        img:"19.png",
        name: "LEGOLAND Water Park Dubai",
        oldPrice: "AED 275.00",
        price: "235.00"
    },
    {
        img:"20.png",
        name: "The Lost Chambers Aquarium",
        oldPrice: "AED 100.00",
        price: "85.00"
    },
    {
        img:"21.png",
        name: "Crocodile Park Dubai",
        oldPrice: "AED 95.00",
        price: "75.00"
    },
    {
        img:"22.png",
        name: "Expo City Dubai",
        oldPrice: "AED 165.00",
        price: "140.00"
    },
    {
        img:"23.png",
        name: "Warner Bros. World Abu Dhabi",
        oldPrice: "AED 345.00",
        price: "295.00"
    },
    {
        img:"24.png",
        name: "Yas Waterworld Abu Dhabi",
        oldPrice: "AED 250.00",
        price: "215.00"
    },
    {
        img:"25.png",
        name: "Real Madrid World Dubai",
        oldPrice: "AED 325.00",
        price: "295.00"
    },
    {
        img:"26.png",
        name: "XLine Dubai Marina",
        oldPrice: "AED 699.00",
        price: "499.00"
    }
];

export default function Tour() {
    const dispatch = useDispatch();
  const handleOpen = () => (
    dispatch(openModal())
  )    
    
    
  return (
    <div className="max-w-7xl mx-auto p-6 mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        { tourpackagedata.map((tour,i) => (
           <div
           key={i}
           className="bg-white shadow-md rounded-lg overflow-hidden"
         >
           <img
             src={`/assets/images/tours/${tour.img}`}
             alt={tour.name}
             className="transition-transform transform hover:scale-105 w-full h-48 object-cover"
           />
           <div className="p-4">
             <h2 className="text-lg font-semibold mb-2">
               {tour.name}
             </h2>
             <p className="text-sm text-gray-500 mb-2">Starting from only</p>
             <p className="text-green-600 text-xl font-bold mb-4">
               {tour.price}
             </p>
             <div className="grid grid-cols-4 gap-4 mt-3">
               <Link href={'https://api.whatsapp.com/send?phone=+971565771119&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?'} className="border border-primary-main text-primary-main text-sm hover:text-white hover:bg-primary-main transition-transform font-bold px-4 py-2 rounded flex items-center justify-center w-full">
                 <i className="fab fa-whatsapp text-2xl"></i>
               </Link>
               <button
                 onClick={handleOpen}
                 className="col-span-3 text-center border border-primary-main text-primary-main hover:text-white hover:bg-primary-main transition-transform text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full"
               >
                 Get Offers
               </button>
             </div>
           </div>
         </div>
        ))
        }
    </div>
  );
}
