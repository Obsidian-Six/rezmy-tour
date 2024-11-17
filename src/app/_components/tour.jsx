"use client"

import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modelSlice/modelSlice";

export default function Tour() {
    const dispatch = useDispatch();
  const handleOpen = () => (
    dispatch(openModal())
  )
    const arr = [
        {
            img: "01.png",
            name: "Dhow Cruise with Dinner - Dubai Creek",
            oldPrice: "AED 75.00",
            price: "AED 55.00"
        },
        {
            img: "27.png",
            name: "AYA Universe with Dubai Dhow Cruise with Dinner - Dubai Marina",
            oldPrice: "AED 150.00",
            price: "AED 135.00"
        },
        {
            img: "02.png",
            name: "Luxury Yacht Ride - Dubai Marina",
            oldPrice: "AED 250.00",
            price: "AED 210.00"
        },
        {
            img: "03.png",
            name: "Desert Safari",
            oldPrice: "AED 175.00",
            price: "AED 157.50"
        },
        {
            img:"04.png",
            name: "Atlantis Aquaventure Water Park",
            oldPrice: "AED 175.00",
            price: "AED 135.00"
        },
        {
            img:"05.png",
            name: "SeaWorld Abu Dhabi",
            oldPrice: "AED 375.00",
            price: "AED 320.00"
        },
        {
            img:"06.png",
            name: "Dubai Dolphinarium Ticket",
            oldPrice: "AED 75.00",
            price: "AED 55.00"
        },
        {
            img:"09.png",
            name: "The View at The Palm Jumeirah Dubai",
            oldPrice: "AED 114.00",
            price: "AED 69.00"
        },
        {
            img:"10.png",
            name: "Abu Dhabi City Tour",
            oldPrice: "AED 135.00",
            price: "AED 121.00"
        },
        {
            img:"11.png",
            name: "Ferrari World Theme Park with Entrance Ticket and Transfers",
            oldPrice: "AED 344.00",
            price: "AED 295.00"
        },
        {
            img:"08.png",
            name: "Dubai Frame",
            oldPrice: "AED 50.00",
            price: "AED 44.00"
        },
        {
            img:"07.png",
            name: "Museum of the Future",
            oldPrice: "AED 149.00",
            price: "AED 139.00"
        },
        {
            img:"12.png",
            name: "Wild Wadi Water Park",
            oldPrice: "AED 299.00",
            price: "AED 259.00"
        },
        {
            img:"13.png",
            name: "IMG Theme Park with Entrance Ticket and Transfers",
            oldPrice: "AED 325.00",
            price: "AED 290.00"
        },
        {
            img:"14.png",
            name: "Dubai Aquarium & Underwater Zoo at Dubai Mall",
            oldPrice: "AED 233.00",
            price: "AED 199.00"
        },
        {
            img:"15.png",
            name: "Global Village Dubai",
            oldPrice: "AED 25.00",
            price: "AED 22.00"
        },
        {
            img:"16.png",
            name: "Miracle Garden",
            oldPrice: "AED 55.00",
            price: "AED 45.00"
        },
        {
            img:"17.png",
            name: "Motiongate Dubai",
            oldPrice: "AED 325.00",
            price: "AED 290.00"
        },
        {
            img:"18.png",
            name: "LEGOLAND Theme Park Dubai",
            oldPrice: "AED 275.00",
            price: "AED 235.00"
        },
        {
            img:"19.png",
            name: "LEGOLAND Water Park Dubai",
            oldPrice: "AED 275.00",
            price: "AED 235.00"
        },
        {
            img:"20.png",
            name: "The Lost Chambers Aquarium",
            oldPrice: "AED 100.00",
            price: "AED 85.00"
        },
        {
            img:"21.png",
            name: "Crocodile Park Dubai",
            oldPrice: "AED 95.00",
            price: "AED 75.00"
        },
        {
            img:"22.png",
            name: "Expo City Dubai",
            oldPrice: "AED 165.00",
            price: "AED 140.00"
        },
        {
            img:"23.png",
            name: "Warner Bros. World Abu Dhabi",
            oldPrice: "AED 345.00",
            price: "AED 295.00"
        },
        {
            img:"24.png",
            name: "Yas Waterworld Abu Dhabi",
            oldPrice: "AED 250.00",
            price: "AED 215.00"
        },
        {
            img:"25.png",
            name: "Real Madrid World Dubai",
            oldPrice: "AED 325.00",
            price: "AED 295.00"
        },
        {
            img:"26.png",
            name: "XLine Dubai Marina",
            oldPrice: "AED 699.00",
            price: "AED 499.00"
        }
    ];
    
    
    
  return (
    <div className="max-w-7xl mx-auto p-6 mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        { arr.map((ele,i) => (
            <div key={i} className="rounded-3xl  border-2 overflow-hidden">
                <div className="relative w-full h-40">
                <Image
                    src={`/assets/images/tours/${ele.img}`}
                    alt="No Preview"
                    fill
                    className="object-cover"
                />
                </div>
                <div className="p-4 flex flex-col justify-between h-[55%]">
                <p className="md:text-lg sm:text-base text-sm font-semibold mb-2">
                {ele.name }
                </p>
                <div className="">
                    <div className="text-primary-main ">
                    <span className="block text-sm font-medium"> Rates Starting From : </span>
                        <div className="flex items-center gap-2">
                            <span className="line-through text-gray-400 text-sm ">
                            {ele.oldPrice}
                            </span>
                            <span className="font-bold text-gray-600">{ele.price}</span>

                        </div>
                    </div>
                    <button onClick={handleOpen} className="bg-gray-100 font-bold p-2 rounded-md text-secondary-main text-sm mt-4 px-10">Book Now</button>

                    </div>
                </div>
            </div>
        ))
        }
    </div>
  );
}
