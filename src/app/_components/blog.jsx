/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Blog() {
    const arr = ["","",""]
  return (
    <div className='max-w-6xl mx-auto'>
        <div className="md:mt-10 max-md:mt-5 flex md:justify-between max-md:justify-center items-center">
        <h2 className="md:text-3xl sm:text-2xl text-base max-md:text-center font-bold tracking-tight text-gray-900 dark:text-black">
          Our Blogs
        </h2>       
      </div>
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">
            {
                arr.map((ele,i) => (
                    <div key={i} className="transition duration-300 max-w-sm rounded overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
                    <div className="py-4 px-8">
                        <a href="#">
                        <h4 className="text-lg mb-3 font-semibold">
                            How to be effective at working remotely?
                        </h4>
                        </a>
                        <p className="mb-2 text-sm text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard dummy text ever
                        since the 1500s
                        </p>
                        <img
                        src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt='No Preview'
                        className="w-100"
                        />
                        <hr className="mt-4" />
                        <span className="text-xs">ARTICLE</span>
                        &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
                    </div>
                    </div>

                ))
            }
        </div>
        <div className="flex justify-center">
        <Link
          href={'#'}
            className="inline-block rounded text-primary-main md:text-base sm:text-sm text-xs font-medium md:leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit md:px-10 max-md:px-5 md:mt-6 p-2 max-md:mt-2"
          >
            View More
          </Link>
        </div>

    </div>
  )
}
