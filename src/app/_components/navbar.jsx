"use client"

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { IoMenu, IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/modelSlice/modelSlice';

const Navbar = () => {
  const path = usePathname();
  const dispatch = useDispatch();
  const [isDrawer , setIsDrawer] = useState(false)
  const handleOpen = () => {
    dispatch(openModal())
  }
  const arr = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Packages',
        link: '/packages'
    },
    {
        name: 'Gallery',
        link: '/gallery'
    },
    {
        name: 'Blog',
        link: '/blogs'
    },
    {
        name: 'About Us',
        link: '/about-us'
    },
    {
        name: 'Contact Us',
        link: '/contact-us'
    }
];

  return (
    <>
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
         onClick={handleOpen}
      >
       Book Now
      </div>
      <div className="hidden max-lg:inline">
          
          <IoMenu className="text-xl" onClick={() => setIsDrawer(true)} />
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
  <div>
    
  </div>
  <div
  className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform hidden max-lg:inline ${
    isDrawer ? "translate-x-0" : "translate-x-full"
  } w-64 dark:bg-secondary-main`}
>
  <button
    type="button"
    onClick={() => setIsDrawer(false)}
    className=""
  >
    <RxCross1 className="text-white text-xl" />
    <span className="sr-only">Close menu</span>
  </button>
  <div className="py-4 overflow-y-auto">
    
  <h5
    id="drawer-navigation-label"
    className="text-base font-semibold text-white uppercase dark:text-white"
  >
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="https://bemyguestimagesnew.s3.ap-south-1.amazonaws.com/images/2024-09-01T05-26-57.600Z96.26911790648147.png"
        className="h-6"
        alt="Logo"
      />
    </div>
  </h5>
    <ul className="space-y-2 font-medium">
      {arr.map((ele, i) => (
        <li key={i}>
          <Link
            href={ele.link}
            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-orange-100 dark:hover:bg-primary-main group cursor-pointer ${
              path === ele.path
                ? "bg-primary-main font-medium"
                : "text-heading-main"
            }`}
            onClick={() => setIsDrawer(false)}
          >
            <span className="ms-3">{ele.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>

    </>

  )
}

export default Navbar   