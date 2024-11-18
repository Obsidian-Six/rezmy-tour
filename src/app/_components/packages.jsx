"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modelSlice/modelSlice";

const Packages = () => {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal());
  const pack = [
    {
      img: "/assets/images/pack2.jpg",
      name: "Gorgeous Dubai 4 Nights / 5 Days ",
      price: "USD 555",
      section: "per person on DBL/TWIN sharing basis ",
      location: 'Dubai',
      details: [
        "04 Nights hotel accommodation in Park Regis Kris Kinn hotel or similar category hotel.",
        "Daily continental buffet breakfast at the hotel restaurant.",
        "Dubai Airport Arrival & Departure with PVT transfers (T1,T2&T3)",
        "Dubai Marina Dhow cruise.",
        "Dubai Half-day city tour.",
        "Burj Khalifa with 124th floor non prime tickets.",
        "Dubai Desert safari with BBQ dinner.",
        "Dubai frame with entrance ticket.",
        "Dubai VAT included.",
        "All tours are with entrance ticket and sharing transfers (SIC) (Except Dubai Airport Transfers)",
      ],
    },
    {
      img: "/assets/images/04.webp",
      name: "Stunning Dubai 5 Nights / 6 Days ",
      price: "USD 999",
      section: "per person on DBL/TWIN sharing basis ",
      location: 'Dubai',
      details: [
        "05 Nights hotel accommodation in Movenpick hotel Bur Dubai or similar category hotel.",
        "Daily continental buffet breakfast at the hotel restaurant.",
        "Dubai Airport Arrival & Departure with PVT transfers (T1,T2&T3)",
        "Dubai Marina Dhow cruise.",
        "Dubai Half-day city tour.",
        "Burj Khalifa with 124th floor non prime tickets.",
        "Fountain show",
        "Dubai Desert safari with BBQ dinner.",
        "Dubai frame with entrance ticket.",
        "Museum of the future",
        "Abu Dhabi Full day city tour",
        "Sheikh Zayed grand Mosque",
        "Global Village & Miracle garden ",
        "Access to any one park on Yas Island. 9Ferrari world Abu Dhabi/ Yas Waterworld/ Warner Bros World/ Sea world)",
        "Dubai VAT included.",
        "All tours are with entrance ticket and sharing transfers (SIC) (Except Dubai Airport Transfers)",
      ],
    },
    {
      img: "/assets/images/pack3.jpg",
      name: "Stunning Dubai and Fantastic Abu Dhabi 6 Nights / 7 Days ",
      price: "USD 1333",
      section: "per person on DBL/TWIN sharing basis ",
      location: 'Dubai',
      details: [
        "05 Nights hotel accommodation in Avani Deira hotel or similar category hotel in Dubai.",
        "01 Night hotel accommodation in W hotel or Similar 5* category hotel in Abu Dhabi.",
        "Daily continental buffet breakfast at the hotel restaurant.",
        "Dubai Airport Arrival & Departure with PVT transfers (T1,T2&T3)",
        "Inter hotel transfers on PVT basis ",
        "Dubai Half Day city tour on Sharing basis ",
        "Museum of the future with private transfers basis ",
        "Dubai desert safari with BBQ dinner on sharing basis",
        "02 Hour yacht tour with private transfers",
        "Madame Tussaudss with private transfers ",
        "Dubai Dolphin show with private transfers",
        "Global Village & Miracle garden with private transfers",
        "Burj Khalifa with 124th floor non prime tickets.",
        "Fountain show",
        "Dubai Desert safari with BBQ dinner.",
        "Dubai frame with entrance ticket.",
        "Abu Dhabi Full day city tour with BAPS temple and Sheikh Zayed grand Mosque",
        "Access to any one park on Yas Island. 9Ferrari world Abu Dhabi/ Yas Waterworld/ Warner Bros World/ Sea world)",
        "Dubai VAT included.",
        "All tours are with entrance ticket and sharing transfers (SIC) (Except Dubai Airport Transfers)",
      ],
    },
  ];
  
  return (
    <div className="max-w-6xl mx-auto md:space-y-16 max-md:space-y-4 md:my-10 max-md:my-8">
      {pack.map((ele, i) => (
        <div
          id={ele.section}
          key={i}
          className="md:h-auto overflow-hidden lg:max-w-none lg:flex shadow-teal bg-white rounded-lg shadow-lg max-md:py-4"
        >
          <div className="md:w-[50%] max-md:w-[100%] flex max-md:flex-col items-center justify-center py-3">
            <img
              className="md:w-[90%] max-md:w-[80%] object-cover rounded-lg md:h-full h-44"
              src={ele.img}
              alt="No Preview"
            />
          </div>
          <div className="bg-white md:w-[60%] md:px-6 lg:flex-shrink-1 max-md:px-8 md:py-4">
            <div className="flex items-center text-primary-main my-2">
              <FaLocationDot className="mr-2 md:text-[20px] max-md:text-[10px]"></FaLocationDot>
              <span className="md:text-[16px] max-md:text-[12px]">
                {ele.location}
              </span>
            </div>
            <h3 className="md:text-xl max-md:text-md text-left leading-8 font-bold text-black sm:text-2xl sm:leading-9 max-md:leading-5 dark:text-black">
              {ele.name}
            </h3>
            <div className="md:mt-4 max-md:mt-2">
              <ul className="pl-0 lg:grid lg:gap-y-4 max-md:gap-y-2 md:space-y-5 lg:space-y-0 max-md:space-y-2">
                {ele.details.map((dat, j) => (
                  <li key={j} className="flex items-start lg:col-span-1">
                    <p className="md:text-lg max-md:text-sm leading-5 text-black font-ttnorms text-left ">
                      {dat}
                    </p>
                  </li>
                ))}
                <li className="flex items-start lg:col-span-1 max-md:pt-1">
                  <p className="mt-4 md:text-lg max-md:text-lg leading-5 text-primary-main font-ttnorms text-left ">
                    <span className="md:text-[30px] max-md:text-[20px] font-700">
                      {ele.price} /
                    </span>{" "}
                    {ele.section}
                  </p>
                </li>
              </ul>
              <div className="lg:mt-2 max-md:mt-2 grid grid-cols-2 w-full gap-4">
                <button
                  onClick={handleOpen}
                  className="flex items-center justify-center md:px-5 max-md:px-3 md:py-3 max-md:py-2  leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-teal border-2 border-primary-main bg-white text-primary-main  md:text-md max-md:text-sm relative dark:bg-primary-main dark:text-white "
                >
                  Book Package
                </button>
                {/* <div className="rounded-md shadow">
                  <Link
                    href="tel:+919425639221"
                    className="flex items-center justify-center md:px-5 max-md:px-3 md:py-3 max-md:py-2  leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-teal border-2 border-primary-main bg-white text-primary-main  md:text-md max-md:text-sm relative dark:text-primary-main"
                  >
                    Call Now
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Packages;
