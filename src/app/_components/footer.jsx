/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { CiFacebook } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F3F4FB] border-t-2 border-primary-main">
      <div className="sm:px-6 md:px-8 w-[90%] mx-auto ">
        <div className="grid md:grid-cols-12 md:justify-items-center md:gap-x-5 md:gap-y-8">
          <div className="col-span-full md:col-span-4 relative text-gray-800  md:gap-4 max-md:gap-3 md:p-6 md:w-72 md:h-72 max-md:py-6 flex flex-col justify-center ">
          <Link
              href="/"
              className="flex items-center justify-center space-x-3 rtl:space-x-reverse md:pr-40 mt-4"
            >
              <img
                src="/assets/images/logo.png"
                className="h-12 scale-125"
                alt="Flowbite Logo"
              />
            
            </Link>
            <p className="text-left text-gray-600 md:text-base max-md:text-center leading-5 mt-2">
            Book the best tours, experiences, and attractions at the most affordable prices. Discover Dubai with us and create memories that will last a lifetime.
            </p>
            {/* <div className="flex space-x-4 max-md:justify-evenly max-md:px-10">
              <Link
                href="http://www.instagram.com/rezmytour"
                target='_blank'  
                className="w-9 h-9 rounded-full hover:text-white bg-white hover:bg-primary-main text-primary-main flex justify-center items-center hover:shadow-md"
              >
                <FaInstagram />
              </Link>
              
              <Link
                href="http://www.facebook.com/rezmytour"
                target='_blank'  
                className="w-9 h-9 rounded-full hover:text-white bg-white hover:bg-primary-main text-primary-main flex justify-center items-center hover:shadow-md"
              >
                <CiFacebook />
              </Link>
            </div> */}
          </div>
          <div className="block text-center md:text-left md:py-12 col-span-full md:col-span-3  md:pl-5 max-md:mt-3 md:ml-4 max-md:mb-4 ">
            <h4 className="text-lg text-black font-semibold md:mb-9 max-md:mb-3">Contact Us</h4>
            <ul className="text-gray-600 transition-all duration-500 grid md:gap-4 max-md:gap-3 text-base">
              <Link href={"mailto:info@rezmytour.com"} className='hover:text-primary-main transition-transform'>info@rezmytour.com</Link>
              <li>
                <Link href={'tel:+971565771119'} className='hover:text-primary-main transition-transform' >+971565771119</Link>
               
                {/* <Link href={'tel:+911234567890 '} className='hover:text-primary-main transition-transform' >+911234567890</Link> */}
                </li>
              <li>
                Port Saeed, Deira Dubai, Dubai, United Arab Emirates.
              </li>
            </ul>
          </div>
          <div className='flex justify-between md:gap-20 md:col-span-4'>
            <div className="block md:py-12 col-span-full md:col-span-2 ">
              <h4 className="text-lg text-black font-semibold md:mb-9 max-md:mb-3 text-center md:text-left">
                Resources
              </h4>
              <div className="flex md:gap-6 max-md:gap-2 max-md:justify-center">
                <ul className="text-gray-600 transition-all max-md:text-[14px] duration-500 grid md:gap-4 max-md:gap-2 text-base">
                  <li>
                    <Link className='hover:text-primary-main transition-transform' href="/">Home</Link>
                  </li>
                  <li>
                    <Link className='hover:text-primary-main transition-transform' href="/packages">Packages</Link>
                  </li>
                  <li>
                    <Link className='hover:text-primary-main transition-transform' href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link className='hover:text-primary-main transition-transform' href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block md:py-12 col-span-full md:col-span-2 ">
              <h4 className="text-lg text-black font-semibold md:mb-9 max-md:mb-3 text-left md:text-left">
                Supports
              </h4>
              <div className="flex md:gap-6 max-md:gap-2  max-md:justify-center">
                <ul className="text-gray-600 max-md:text-[14px] transition-all duration-500 grid md:gap-4 max-md:gap-2 text-base max-md:text-left">
                  <Link className='hover:text-primary-main transition-transform' href={'/gallery'}>
                    Gallery
                  </Link>
                  <Link className='hover:text-primary-main transition-transform' href={'/blogs'}>
                    Blog
                  </Link>
                  <Link className='hover:text-primary-main transition-transform' href={'/terms-and-condition'}>
                    Terms and Conditon
                  </Link>
                  <Link className='hover:text-primary-main transition-transform' href={'/privacy-policy'}>
                    Privacy Policy
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-4 bg-primary-main">
        <div className="flex items-center justify-center">
          <span className="text-sm text-white ">
            Your Jorney Begin That why You are here !
            Copyright@2024 All Right Reserved by{" "}
            <a href="/">Obsidian</a> 
          </span>
        </div>
      </div> */}
    </footer>

  )
}

export default Footer
