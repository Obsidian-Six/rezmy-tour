"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { openModal } from '../redux/modelSlice/modelSlice';
import { useDispatch } from 'react-redux';

export default function HomeTour() {
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
        }
    ]
  return (
    
    <div className="max-w-6xl mx-auto xl:p-0 md:p-6 max-md:px-6">
      <div className="md:mt-10 max-md:mt-5 flex md:justify-between max-md:justify-center items-center">
        <h2 className="md:text-3xl sm:text-2xl text-base max-md:text-center font-bold tracking-tight text-gray-900 dark:text-black">
          Our Tour
        </h2>       
      </div>
     
    <div className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
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
                <div className="p-4 flex flex-col justify-between lg:h-[55%]">
                <p className="md:text-lg sm:text-base text-sm font-semibold mb-2">
                {ele.name }
                </p>
                <div className="">
                    <div className="text-primary-main ">
                    <span className="block text-sm font-medium"> Starting From : </span>
                        <div className="flex items-center gap-2">
                            {/* <span className="line-through text-gray-400 text-sm ">
                            {ele.oldPrice}
                            </span> */}
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
      <div className="flex justify-center">
       <Link
        href={'/tours'}
          className="inline-block rounded text-primary-main md:text-base sm:text-sm text-xs font-medium md:leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit md:px-10 max-md:px-5 md:mt-6 p-2 max-md:mt-2"
        >
          All Tours
        </Link>
      </div>
    </div>
  )
}
