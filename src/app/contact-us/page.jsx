import React from 'react'
import HomeContact from '../_components/home-contact'
import PackageHero from '../_components/package-hero'
import { IoCall } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMail } from "react-icons/io5";

const page = () => {
  return (
    <div>
         <PackageHero name={"Contact Us"}  img={"/assets/images/about-images/13.jpg"} page={'Contact Us'} />
        <HomeContact />
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 sm:gap-6 gap-4 my-10 max-w-6xl mx-auto xl:px-0 px-6">
        <div className="rounded-lg overflow-hidden">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            />

            </div>
            <div className="">
                <p className="md:text-[2.5rem] sm:text-2xl text-xl font-bold text-primary-main mb-2">Connect with us</p>
                <p className="md:text-[16px] max-md:text-[12px]">We look forward to guiding you through the beauty of Pachmarhi!</p>
                <div className="flex md:gap-6 max-md:gap-4 md:mt-12 max-md:mt-6">
                    <IoCall className="text-4xl bg-primary-main text-white p-2 rounded-lg" />
                    <div>
                        <p className="md:text-2xl sm:text-xl max-md:text-lg font-semibold">Phone</p>
                        <p className="text-[#858587] max-md:text-[14px] md:mt-1.5 max-md:mt-1">+91 94256 39221</p> 
                    </div>
                </div>
                <div className="flex md:gap-6 gap-4 md:my-10 sm:my-8 my-6">
                    <IoMail className="text-4xl bg-primary-main text-white p-2 rounded-lg" />
                    <div>
                        <p className="md:text-2xl sm:text-xl max-md:text-lg font-semibold">Email</p>
                        <p className="text-[#858587] max-md:text-[14px] md:mt-1.5 max-md:mt-1">suhantoursandtravelspachmarhi<span className='max-sm:block'>@gmail.com</span></p>
                    </div>
                </div>
                <div className="flex md:gap-6 gap-4 md:my-10 sm:my-8 my-6">
                    <FaLocationDot className="text-4xl  bg-primary-main text-white p-2  rounded-lg max-md:w-16" />
                    <div>
                        <p className="md:text-2xl sm:text-xl max-md:text-lg font-semibold"> Location</p>
                        <p className="text-[#858587] max-md:text-[14px] md:mt-1.5 max-md:mt-1">Patel road ward no 02, Beside Khalsa Hotel, Pachmarhi, Madhya Pradesh  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page