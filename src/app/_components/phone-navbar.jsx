/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export default function PhoneNavbarDrawer() {
  const path = usePathname();
  
  const [isDrawer , setIsDrawer] = useState(false)
  
  const categ = [
    {
        name:'Home',
        link:'/',
        path:'/',
    },
    {
        name:'Packages',
        link:'/packages',
        path:'/packages',
    },
    {
        name:'About Us',
        link:'/about-us',
        path:'/about-us',
    },
    {
        name:'Contact Us',
        link:'contact-us',
        path:'/contact-us',
    },
]

  return (
    <>
 <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={()=> setIsDrawer(true)}
    >
      <span className="sr-only">Open main menu</span>
     <IoMenuSharp className="text-2xl text-gray-500" />

    </button>
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform hidden max-lg:inline ${
          isDrawer ? "translate-x-0" : "-translate-x-full"
        } bg-white w-64 dark:bg-secondary-main`}
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-white uppercase dark:text-white"
        >
       <div
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/images/about-images/logo-white.png"
            className="h-10 md:scale-[3] scale-150"
            alt="Flowbite Logo"
          />
        
        </div>
        </h5>
        <button
          type="button"
          onClick={()=>setIsDrawer(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <RxCross1 className="text-white" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {
              categ.map((ele,i) => (
              <li key={i}>
                <Link href={ele.link}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-orange-100 dark:hover:bg-primary-main group cursor-pointer ${path === ele.path ? "bg-primary-main font-medium" : "text-heading-main"}`} onClick={()=>setIsDrawer(false)}
                >
                  <span className="ms-3">{ele.name}</span>
                </Link>
              </li>

              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}
