"use client"

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoMenu, IoMenuSharp } from "react-icons/io5";
import PhoneNavbarDrawer from './phone-navbar';

const Navbar = () => {
  const path = usePathname();
  const arr = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Packages',
        link: '/package'
    },
    {
        name: 'Gallery',
        link: '/gallery'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
    {
        name: 'About Us',
        link: '/about'
    },
    {
        name: 'Contact Us',
        link: '/contact'
    }
];

  return (
    <nav className="bg-white border-gray-200 py-4 ">
    <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
      <Link href='/' className="flex items-center">
        <img
          src="https://bemyguestimagesnew.s3.ap-south-1.amazonaws.com/images/2024-09-01T05-26-57.600Z96.26911790648147.png"
          className="h-6 mr-3 sm:h-10"
          alt="Logo"
        />
      </Link>
      <div className="flex items-center lg:order-2">
        <div className="hidden mt-2  sm:inline-block">
        </div>
        <div
        className="bg-heading-main cursor-pointer text-primary-main hover:bg-heading-main py-2 px-4 rounded text-base font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg lg:inline
         hidden"
      >
       Book Now
      </div>
      <div className="hidden max-lg:inline">
          
          <IoMenu className="text-xl" />
      </div>
      </div>
  
        <ul className="lg:flex hidden justify-between mt-0 text-lg w-full max-w-xl">
          {
              arr.map((ele,i) => (
              <a key={i}
                href={ele.link}
                className={`block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-main lg:p-0  lg:dark:hover:text-primary-main lg:dark:hover:font-medium dark:hover:bg-gray-700 dark:hover:text-heading-main lg:dark:hover:bg-transparent  dark:border-gray-700 ${path === ele.link ? "text-primary-main font-medium" : "text-heading-main"}`}
              >
                  {ele.name}
              </a>
  
              ))
          }
        </ul>
    </div>
  </nav>

  )
}

export default Navbar   