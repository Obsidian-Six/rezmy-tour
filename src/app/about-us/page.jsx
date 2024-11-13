"use client"

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'
import HomeAbout from '../_components/home-about'
import PackageHero from '../_components/package-hero'

const AboutUs = () => {
  const images = [
    '/assets/images/about-images/12.jpg',
    '/assets/images/about-images/13.jpg',
    '/assets/images/about-images/14.jpg',
    '/assets/images/about-images/15.jpg',
    '/assets/images/about-images/07.jpg',
    '/assets/images/about-images/17.jpg',
    '/assets/images/about-images/18.jpg',
    '/assets/images/about-images/19.jpg',
    '/assets/images/about-images/20.jpg',
    '/assets/images/about-images/21.jpg',
    '/assets/images/about-images/05.jpg',
    '/assets/images/about-images/06.jpg',
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false)
  }

  const goToPrev = () => {
    setPhotoIndex((photoIndex + 1) % images.length)
  }
  const goToNext = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length)
  }

  return (
    <>
      <PackageHero name={"About Us"} img={"/assets/images/about-images/12.jpg"} page={'About Us'} />
      <HomeAbout />
      <div className="flex items-center justify-evenly md:py-4 text-primary-main">
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

      <div className='gallery md:h-[620px] h-96 py-6'>
        <div className='line1 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]'>
          {
            images.slice(0,4).map((ele,i) => (
            <div key={i} className="relative photo1 h-full w-[25%] " onClick={() => {setPhotoIndex(i); setIsOpen(true)}}>
              <Image fill className="object-cover object-center w-full h-full" src={ele} alt="" />
            </div>
            ))
          }
        </div>
        <div className='line1 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]'>
          {
            images.slice(4,9).map((ele,i) => (
            <div key={i} className="relative photo1 h-full w-[25%] "  onClick={() => {setPhotoIndex(i+4); setIsOpen(true)}}>
              <Image fill className="object-cover object-center w-full h-full" src={ele} alt="" />
            </div>
            ))
          }
        </div>
        <div className='line1 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]'>
          {
            images.slice(9,12).map((ele,i) => (
            <div key={i} className="relative photo1 h-full w-[33%] "  onClick={() => {setPhotoIndex(i+9); setIsOpen(true)}}>
              <Image fill className="object-cover object-center w-full h-full" src={ele} alt="" />
            </div>
            ))
          }
        </div>
      </div>
      
  
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative">
              <img className="max-w-[90vw] max-h-[80vh] h-[80vw] w-[60vw] object-cover" src={images[photoIndex]} alt="No Preview" />
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl bg-white text-primary-main px-2 rounded"
                onClick={goToPrev}
              >
                &#129092;
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl bg-white text-primary-main px-2 rounded"
                onClick={goToNext}
              >
                &#129094;
              </button>
              <button className="absolute top-4 right-4 bg-white px-2 rounded pb-1 text-primary-main text-2xl" onClick={closeModal}>
                &times; 
              </button>
            </div>
          </div>
        )}


    </>
  );
}

export default AboutUs;
