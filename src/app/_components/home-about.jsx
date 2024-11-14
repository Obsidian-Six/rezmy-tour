/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeAbout = () => {
  return (

    <div className="relative">
    <div className="md:h-[18.5vw] md:w-full bg-primary-main/50 absolute top-36 -z-10" />
    <div className="max-w-6xl mx-auto xl:p-0 md:p-6  max-md:px-6">
        <div className="flex flex-col-reverse lg:flex-row justify-between md:gap-8 sm:gap-6 gap-4 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] md:p-6 p-4 md:my-14 sm:my-6 my-4 rounded-md bg-white">
            <div className="w-full flex flex-col justify-center">
            <h1 className="md:text-3xl sm:text-2xl text-base font-bold tracking-tight text-gray-900  leading-9 dark:text-heading-main md:pb-4 max-md:pb-2 max-md:text-center">
            <span className="text-black">About Us</span>
            </h1>
            <p className={`font-normal md:text-base max-md:text-[14px] md:leading-6 text-secondary-main dark:text-[#666666] max-md:text-justify`}>
{`  Discover the wonders of Dubai with our curated travel packages. From the iconic Burj Khalifa to the luxurious Palm Jumeirah, our tours offer an unforgettable experience. Whether you're exploring the vibrant souks, cruising on a traditional dhow, or experiencing thrilling desert safaris, we ensure every moment is magical. Our team is dedicated to providing top-notch service, ensuring your journey is seamless and filled with cherished memories. Let us take care of everything, so you can focus on making memories that last a lifetime.`}
</p>

            </div>
            <div className="md:w-[80%] relative md:h-[22vw] h-[50vw]">
            <Image src="/assets/images/04.webp" alt="A group of People" fill className="object-cover rounded-md" />
            </div>
        </div>
    </div>

</div>

  )
}

export default HomeAbout