/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { CiFacebook } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-primary-main/20 border-t-2 border-primary-main">
      <div className="sm:px-6 md:px-8 w-[90%] mx-auto ">
        <div className="grid md:grid-cols-12 md:justify-items-center md:gap-x-5 md:gap-y-8">
          <div className="col-span-full md:col-span-4 relative text-gray-800  md:gap-6 max-md:gap-3 md:p-6 md:w-72 md:h-72 max-md:py-6 flex flex-col justify-center ">
          <Link
              href="/"
              className="flex items-center justify-center space-x-3 rtl:space-x-reverse md:pr-32"
            >
              <img
                src="https://bemyguestimagesnew.s3.ap-south-1.amazonaws.com/images/2024-09-01T05-26-57.600Z96.26911790648147.png"
                className="h-10 "
                alt="Flowbite Logo"
              />
            
            </Link>
            <p className="text-left text-gray-600 md:text-base font-medium max-md:text-center">
            Book the best tours, experiences, and attractions at the most affordable prices. Discover Dubai with us and create memories that will last a lifetime.
            </p>
            <div className="flex space-x-4 max-md:justify-evenly max-md:px-10">
              <Link
                href="https://www.instagram.com"
                target='_blank'  
                className="w-9 h-9 rounded-full hover:text-white bg-white hover:bg-primary-main text-primary-main flex justify-center items-center hover:shadow-md"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.youtube.com"
                target='_blank'  
                className="w-9 h-9 rounded-full hover:text-white bg-white hover:bg-primary-main text-primary-main flex justify-center items-center hover:shadow-md"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.facebook.com"
                target='_blank'  
                className="w-9 h-9 rounded-full hover:text-white bg-white hover:bg-primary-main text-primary-main flex justify-center items-center hover:shadow-md"
              >
                <CiFacebook />
              </Link>
            </div>
          </div>
          <div className='flex justify-between md:gap-20 md:col-span-4'>
            <div className="block md:py-12 col-span-full md:col-span-2 ">
              <h4 className="text-lg text-primary-main font-bold md:mb-9 max-md:mb-3 text-center md:text-left">
                Resources
              </h4>
              <div className="flex md:gap-6 max-md:gap-2 max-md:justify-center">
                <ul className="text-gray-600 transition-all max-md:text-[14px] duration-500 grid md:gap-4 max-md:gap-2 text-base font-medium">
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
              <h4 className="text-lg text-primary-main font-bold md:mb-9 max-md:mb-3 text-left md:text-left">
                Supports
              </h4>
              <div className="flex md:gap-6 max-md:gap-2  max-md:justify-center">
                <ul className="text-gray-600 max-md:text-[14px] transition-all duration-500 grid md:gap-4 max-md:gap-2 text-base font-medium max-md:text-left">
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
          <div className="block text-center md:text-left md:py-12 col-span-full md:col-span-2 md:pl-5 max-md:mt-3 md:ml-4 max-md:mb-4 ">
            <h4 className="text-lg text-primary-main font-bold md:mb-9 max-md:mb-3">Get In Touch</h4>
            <ul className="text-gray-600 transition-all duration-500 grid md:gap-6 max-md:gap-3 text-base font-medium">
              <Link href={"mailto:abc@gmail.com"} className='hover:text-primary-main transition-transform'>abctourandtravel@gmail.com</Link>
              <li>
                <Link href={'tel:+911234567890'} className='hover:text-primary-main transition-transform' >+911234567890</Link>
               
                {/* <Link href={'tel:+911234567890 '} className='hover:text-primary-main transition-transform' >+911234567890</Link> */}
                </li>
              <li>01B, In5 Tech, Dubai Internet City, Dubai, U.A.E</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 bg-primary-main">
        <div className="flex items-center justify-center">
          <span className="text-sm text-white ">
            Your Jorney Begin That why You are here !
            {/* Copyright@2024 All Right Reserved by{" "} */}
            {/* <a href="/">Obsidian</a>  */}
          </span>
        </div>
      </div>
    </footer>

  )
}

export default Footer
