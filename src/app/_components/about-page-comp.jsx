/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomeAbout from './home-about'

const AboutPageComp = () => {
  return (
    <div className=' mt-10'>
      
      <div className="flex items-center justify-evenly text-primary-main" >
        <div className="experience flex flex-col items-center">
          <h1 className="md:text-[40px] md:text-2xl max-md:text-lg font-[600]">10+</h1>
          <p className="md:text-[32px] sm:text-2xl md:text-xl max-md:text-sm font-[400]">Years Experience</p>
        </div>
        <div className="guide flex flex-col items-center">
          <h1 className="md:text-[40px] md:text-2xl max-md:text-lg font-[600]">100+</h1>
          <p className="md:text-[32px] sm:text-2xl md:text-xl max-md:text-sm font-[400]">Tour Guide</p>
        </div>
        <div className="connect flex flex-col items-center">
          <h1 className="md:text-[40px] md:text-2xl max-md:text-lg font-[600]">500+</h1>
          <p className="md:text-[32px] sm:text-2xl md:text-xl max-md:text-sm font-[400]">Traveler Connect</p>
        </div>
      </div>
      <HomeAbout />


          <section className="bg-white py-12">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <p className="font-bold md:text-3xl text-xl tracking-tight text-gray-900 sm:text-4xl leading-9 dark:text-heading-main md:pb-4 max-md:pb-2">
        Your Trusted Partner for Dubai Tours
      </p>
      <p className="font-normal md:text-base text-sm md:leading-6 text-secondary-main dark:text-[#666666] mt-4 max-w-2xl lg:mx-auto text-center">
        Experience Dubai like never before with our expertly curated tour packages. We offer a blend of luxury, adventure, and cultural experiences, ensuring memories that last a lifetime.
      </p>
    </div>
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-main/50 text-white">
              <img
                src="https://www.svgrepo.com/show/503163/api-settings.svg"
                alt="Customized Tours Icon"
              />
            </div>
            <p className="font-bold ml-16 text-lg leading-6 text-gray-900 dark:text-heading-main">
              Customized Tours
            </p>
          </dt>
          <dd className="mt-2 ml-16 font-normal md:text-base text-sm md:leading-6 text-secondary-main dark:text-[#666666]">
            Tailor your trip to your preferences with our flexible and personalized tour packages. We make every experience uniquely yours.
          </dd>
        </div>
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-main/50 text-white">
              <img
                src="https://www.svgrepo.com/show/503138/webpack.svg"
                alt="Luxury Accommodations Icon"
              />
            </div>
            <p className="font-bold ml-16 text-lg leading-6 text-gray-900 dark:text-heading-main">
              Luxury Accommodations
            </p>
          </dt>
          <dd className="mt-2 ml-16 font-normal md:text-base text-sm md:leading-6 text-secondary-main dark:text-[#666666]">
            Stay in Dubai’s finest hotels, resorts, and luxury accommodations handpicked for ultimate comfort and convenience.
          </dd>
        </div>
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-main/50 text-white">
              <img
                src="https://www.svgrepo.com/show/511771/dashboard-671.svg"
                alt="Affordable Pricing Icon"
              />
            </div>
            <p className="font-bold ml-16 text-lg leading-6 text-gray-900 dark:text-heading-main">
              Affordable Pricing
            </p>
          </dt>
          <dd className="mt-2 ml-16 font-normal md:text-base text-sm md:leading-6 text-secondary-main dark:text-[#666666]">
            Our tour packages offer unmatched value, combining premium services with competitive pricing for every traveler.
          </dd>
        </div>
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-main/50 text-white">
              <img
                src="https://www.svgrepo.com/show/76267/free-commercial-label.svg"
                alt="Expert Guides Icon"
              />
            </div>
            <p className="font-bold ml-16 text-lg leading-6 text-gray-900 dark:text-heading-main">
              Expert Guides
            </p>
          </dt>
          <dd className="mt-2 ml-16 font-normal md:text-base text-sm md:leading-6 text-secondary-main dark:text-[#666666]">
            Explore Dubai with experienced guides who ensure you discover the city’s hidden gems and cultural landmarks.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</section>



    </div>
  )
}

export default AboutPageComp