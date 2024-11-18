"use client"

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modelSlice/modelSlice";


const HomePackage = () => {
  const dispatch = useDispatch();
  const handleOpen = () => (
    dispatch(openModal())
  )
  const arr = [
    {
      img: '/assets/images/pack2.jpg',
      packageName: 'Gorgeous Dubai',
      details: 'Experience the charm of Dubai with this amazing package. Explore iconic landmarks, indulge in shopping at world-class malls, and enjoy desert safaris.',
      location: 'Dubai',
      day: '4 Nights / 5 Days',
      price: 'USD 555',
    },
    {
      img: '/assets/images/04.webp',
      packageName: 'Stunning Dubai',
      details: 'Discover the vibrant culture and stunning architecture of Dubai. This package includes visits to the Burj Khalifa, Palm Jumeirah, and an unforgettable evening dhow cruise.',
      location: 'Dubai',
      day: '5 Nights / 6 Days',
      price: 'USD 999',
    },
    {
      img: '/assets/images/pack3.jpg',
      packageName: 'Stunning Dubai,Fantastic AbuDhabi',
      details: 'An extraordinary package covering the best of Dubai and Abu Dhabi. Highlights include the Sheikh Zayed Grand Mosque, Ferrari World, Dubai Frame, and luxurious experiences.',
      location: 'Dubai',
      day: '6 Nights / 7 Days',
      price: 'USD 1333',
    },
  ];
  
  return (
    <div className="max-w-6xl mx-auto xl:p-0 md:p-6 max-md:px-6">
      <div className="md:mt-10 max-md:mt-5 flex md:justify-between max-md:justify-center items-center">
        <h2 className="md:text-3xl sm:text-2xl text-base max-md:text-center font-bold tracking-tight text-gray-900 dark:text-black">
          Our Popular Tour Packages
        </h2>       
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 md:my-4 max-md:my-2">
            {
                arr.map((ele,i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                <img
                    alt="trees and mountains"
                    src={ele.img}
                    className="rounded-lg w-full md:h-48  h-36 object-cover"
                />
                <div className="">
                    <div className="flex items-center text-primary-main my-2">
                      <FaLocationDot className="mr-2 md:text-[20px] max-md:text-[10px]"></FaLocationDot>
                      <span className="md:text-[16px] max-md:text-[12px]"> {ele.location}</span>
                    </div>
                    <h2 className="md:text-lg sm:text-base text-sm font-semibold mb-2">
                    {ele.packageName}
                    </h2>
                    <div className="text-gray-500 md:mb-4 max-md:mb-2 sm:text-base text-sm"> {ele.details}</div>
                    <div className="flex items-start lg:col-span-1 md:pt-1 mb-4">
                        <p className="mt-2 md:text-lg max-md:text-md leading-5 text-primary-main font-ttnorms text-left ">
                        <span className="md:text-[24px] max-md:text-[20px] font-700">{ele.price} /</span> Total package cost
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <button onClick={handleOpen} className="bg-primary-main text-white md:py-2 py-1 md:px-4 md:rounded-lg rounded-sm w-full md:text-base sm:text-sm text-xs">
                      Book Now
                      </button>
                      {/* <Link href={'tel:+919425639221'} className="text-primary-main border-primary-main border md:py-2 max-md:py-2 md:px-4 md:rounded-lg rounded-sm text-center w-full md:text-base sm:text-sm text-xs">
                      Call Now
                      </Link> */}

                    </div>
                </div>
                </div>

                ))
            }
      </div>
      <div className="flex justify-center">
       <Link
        href={'/packages'}
          className="inline-block rounded text-primary-main md:text-base sm:text-sm text-xs font-medium md:leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit md:px-10 max-md:px-5 md:mt-6 p-2 max-md:mt-2"
        >
          All Packages
        </Link>
      </div>
    </div>
  );
};

export default HomePackage;
