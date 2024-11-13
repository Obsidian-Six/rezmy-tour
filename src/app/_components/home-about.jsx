/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeAbout = () => {
  return (
    <div className=''>
<div className="relative">
        <div className="md:h-[18.5vw] md:w-full bg-primary-main/50 absolute top-36 -z-10" />
        <div className="max-w-6xl mx-auto xl:p-0 md:p-6  max-md:px-6">
            <div className="flex flex-col-reverse lg:flex-row justify-between md:gap-8 sm:gap-6 gap-4 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] md:p-6 p-4 md:my-14 sm:my-6 my-4 rounded-md bg-white">
                <div className="w-full flex flex-col justify-center">
                <h1 className="md:text-3xl sm:text-2xl text-base font-bold tracking-tight text-gray-900  leading-9 dark:text-heading-main md:pb-4 max-md:pb-2 max-md:text-center">
                 <span className="text-black">About Us</span>
                </h1>
                <p className={`font-normal md:text-base max-md:text-[14px] md:leading-6 text-secondary-main dark:text-[#666666] max-md:text-justify`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus expedita, hic accusamus dolorem laborum ullam omnis obcaecati in! Sint dicta quas perspiciatis excepturi aperiam error quasi odit natus nam repellat iusto, ratione tenetur facere. Repudiandae, delectus quas. Rem aperiam assumenda perferendis debitis necessitatibus quam cumque. Rerum, cum, provident voluptatibus commodi odio quam facere omnis dicta obcaecati ipsa nesciunt minus iure reprehenderit vitae non perferendis nemo at error, cupiditate soluta sed. Animi adipisci aliquam, reprehenderit dolorem corporis accusamus odio numquam vero deserunt nesciunt, 
                </p>
                </div>
                <div className="md:w-[80%] relative md:h-[22vw] h-[50vw]">
                <Image src="/assets/images/04.webp" alt="A group of People" fill className="object-cover rounded-md" />
                </div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default HomeAbout