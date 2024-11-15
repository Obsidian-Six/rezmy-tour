"use client"

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'

export default function Gallery() {
    const images = [
        '/assets/images/01.png',
        '/assets/images/02.png',
        '/assets/images/03.png',
        '/assets/images/05.png',
        '/assets/images/04.webp',
        '/assets/images/07.jpg',
        '/assets/images/08.png',
        '/assets/images/blogs/01.jpg',
        '/assets/images/blogs/02.jpg',
        '/assets/images/hero-section/02.png',
        '/assets/images/hero-section/01.png',
        '/assets/images/hero-section/03.png',
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
    <div className='max-w-7xl mx-auto'>
      <div className='gallery md:h-[620px] h-96 py-6'>
        <div className='line1 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]'>
          {
            images.slice(0,4).map((ele,i) => (
            <div key={i} className="relative photo1 h-full group overflow-hidden  cursor-pointer w-[25%] rounded-sm" onClick={() => {setPhotoIndex(i); setIsOpen(true)}}>
              <Image fill className="group-hover:scale-105 transition-transform object-cover object-center w-full h-full" src={ele} alt="" />
              <div className='absolute top-0 left-0 bg-black/40 h-full w-full flex justify-center items-center text-white '><span className='group-hover:inline hidden'> View</span></div>
            </div>
            ))
          }
        </div>
        <div className='line1 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]'>
          {
            images.slice(4,9).map((ele,i) => (
            <div key={i} className="relative photo1 h-full group overflow-hidden  cursor-pointer w-[25%] rounded-sm "  onClick={() => {setPhotoIndex(i+4); setIsOpen(true)}}>
              <Image fill className="group-hover:scale-105 transition-transform object-cover object-center w-full h-full" src={ele} alt="" />
              <div className='absolute top-0 left-0 bg-black/40 h-full w-full flex justify-center items-center text-white '><span className='group-hover:inline hidden'> View</span></div>
            </div>
            ))
          }
        </div>
        <div className='line1 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]'>
          {
            images.slice(9,12).map((ele,i) => (
            <div key={i} className="relative photo1 h-full group overflow-hidden  cursor-pointer w-[33%] "  onClick={() => {setPhotoIndex(i+9); setIsOpen(true)}}>
              <Image fill className="group-hover:scale-105 transition-transform object-cover object-center w-full h-full" src={ele} alt="" />
              <div className='absolute top-0 left-0 bg-black/40 h-full w-full flex justify-center items-center text-white '><span className='group-hover:inline hidden'> View</span></div>
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

    </div>
  )
}
