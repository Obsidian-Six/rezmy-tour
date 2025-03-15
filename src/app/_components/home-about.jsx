/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAbout = () => {
  return (
    //     <div className="relative">
    //     <div className="md:h-[18.5vw] md:w-full bg-primary-main/50 absolute top-36 -z-10" />
    //     <div className="max-w-6xl mx-auto xl:p-0 md:p-6  max-md:px-6">
    //         <div className="flex flex-col-reverse lg:flex-row justify-between md:gap-8 sm:gap-6 gap-4 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] md:p-6 p-4 md:my-14 sm:my-6 my-4 rounded-md bg-white">
    //             <div className="w-full flex flex-col justify-center">
    //             <h1 className="md:text-3xl sm:text-2xl text-base font-bold tracking-tight text-gray-900  leading-9 dark:text-heading-main md:pb-4 max-md:pb-2 max-md:text-center">
    //             <span className="text-black">About Us</span>
    //             </h1>
    //             <p className={`font-normal md:text-base max-md:text-[14px] md:leading-6 text-secondary-main dark:text-[#666666] max-md:text-justify`}>
    // {`  Discover the wonders of Dubai with our curated travel packages. From the iconic Burj Khalifa to the luxurious Palm Jumeirah, our tours offer an unforgettable experience. Whether you're exploring the vibrant souks, cruising on a traditional dhow, or experiencing thrilling desert safaris, we ensure every moment is magical. Our team is dedicated to providing top-notch service, ensuring your journey is seamless and filled with cherished memories. Let us take care of everything, so you can focus on making memories that last a lifetime.`}
    // </p>

    //             </div>
    //             <div className="md:w-[80%] relative md:h-[22vw] h-[50vw]">
    //             <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/images/04.webp" alt="A group of People" fill className="object-cover rounded-md" />
    //             </div>
    //         </div>
    //     </div>

    // </div>
    <div className="bg-background-main md:p-10 p-4">
      <div className="mt-10 max-md:mt-5 flex justify-between items-center">
        <div className="w-full"></div>
        <div className="md:text-3xl sm:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center w-full">
          About Us
        </div>
        <div className="w-full" />
      </div>
      <div className="max-w-6xl mx-auto md:p-10 md:px-14 p-4 overflow-hidden bg-white rounded-lg shadow-lg md:my-10 my-6 relative">
        <div className="grid md:grid-cols-2 items-center justify-center">
          <div className="relative max-md:hidden">
            <div className=" md:h-[90rem] w-56 mx-auto bg-purple-800/50 absolute left-24 -top-28 rotate-12" />
            <img
              alt="Dubai Frame with a clear blue sky in the background"
              className="rounded-lg z-10 w-full mx-auto h-[34rem] relative"
              src="/assets/images/09.png"
            />
          </div>
          <div className="md:pl-8 my-6 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-800">
              <span className="text-primary-main">Discover Dubai </span> with
              Experts
            </h2>
            <p className="text-gray-600 mt-4">
              Whether it’s the Burj Khalifa, desert safaris, or dhow cruises, we
              ensure every moment is magical. Let us plan, so you can explore
              stress-free.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-6">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                <span className="text-primary-main font-medium">
                  Handpicked Experiences
                </span>{" "}
                – From iconic landmarks to hidden gems
              </li>
              <li>
                <span className="text-primary-main font-medium">
                  Seamless Travel Planning
                </span>{" "}
                – We handle the details, so you don’t have to
              </li>
              <li>
                <span className="text-primary-main font-medium">
                  Trusted by Travelers
                </span>{" "}
                – 10+ years of expertise in curated tours
              </li>
              <li>
                <span className="text-primary-main font-medium">
                  Exclusive Deals &amp; Packages
                </span>{" "}
                – Best prices for unforgettable memories
              </li>
            </ul>
            <button className="mt-6 bg-primary-main text-white py-2 px-8 rounded text-lg font-bold hover:bg-primary-main/80">
              Plan My Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
