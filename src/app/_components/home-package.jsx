"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modelSlice/modelSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePackage = () => {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal());
  const arr = [
    {
      img: "/assets/images/pack2.jpg",
      packageName: "Gorgeous Dubai",
      details:
        "Experience the charm of Dubai with this amazing package. Explore iconic landmarks, indulge in shopping at world-class malls, Burj Khalifa and enjoy desert safaris.",
      location: "Dubai",
      day: "4 Nights / 5 Days",
      price: 555,
      indPrice: "44,444",
    },
    {
      img: "/assets/images/04.webp",
      packageName: "Stunning Dubai",
      details:
        "Discover the vibrant culture and stunning architecture of Dubai. This package includes visits to the Burj Khalifa, Palm Jumeirah, and an unforgettable evening dhow cruise.",
      location: "Dubai",
      day: "5 Nights / 6 Days",
      price: 999,
      indPrice: "80,888",
    },
    {
      img: "/assets/images/pack3.jpg",
      packageName: "Stunning Dubai,Fantastic AbuDhabi",
      details:
        "An extraordinary package covering the best of Dubai and Abu Dhabi. Highlights include the Sheikh Zayed Grand Mosque, Ferrari World, Dubai Frame, and luxurious experiences.",
      location: "Dubai",
      day: "6 Nights / 7 Days",
      price: 1333,
      indPrice: "1,15,111",
    },
  ];

  const packagesData = [
    {
      link:'#packone',
      id: 1,
      image:
        "https://storage.googleapis.com/a1aa/image/ebNaUVVjFent5hUWT8vuppFa_Zl8q_zOTINs2w2Z9cc.jpg",
      title: "Gorgeous Dubai",
      duration: "6D/7N",
      discount: "25% Off",
      rating: 4,
      highlights: [
        "Burj Khalifa & Palm Jumeirah",
        "Luxury shopping at world-class malls",
        "Desert safaris with Dune Bashing",
        "Fine dining & Cultural Experiences",
      ],
      price: "$555",
      inrPrice: "₹44,444",
    },
    {
      link:'#packtwo',
      id: 2,
      image:
        "https://storage.googleapis.com/a1aa/image/pvcSyeqKcElkQjzOB14QrpGVe2iwmK-BUYwQBkL0ZKM.jpg",
      title: "Stunning Dubai",
      duration: "6D/7N",
      discount: "25% Off",
      rating: 5,
      highlights: [
        "Evening Dhow Cruise",
        "Enjoy a magical dinner on Dubai Creek",
        "Historic & Cultural Attractions",
        "Modern Architectural Wonders",
      ],
      price: "$999",
      inrPrice: "₹80,888",
    },
    {
      link:'#packthree',
      id: 3,
      image:
        "https://storage.googleapis.com/a1aa/image/gan8fi4IYMfVjXxAtP8yh510-y9mRMJUJ0TJl-mHKq4.jpg",
      title: "Stunning Dubai - Fantastic AbuDhabi",
      duration: "6D/7N",
      discount: "25% Off",
      rating: 4,
      highlights: [
        "Sheikh Zayed Grand Mosque",
        "Ferrari World Abu Dhabi",
        "Dubai Frame – Panoramic city views",
        "Luxury Stays & VIP Experiences",
      ],
      price: "$1333",
      inrPrice: "₹1,15,111",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto xl:p-0 md:p-6 max-md:px-6 relative">
      <div className="mt-10 mb-5 max-md:my-5 flex justify-between items-center">
        <h2 className="md:text-3xl sm:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-black">
          Our Popular Tour Packages
        </h2>
        <div className=" flex justify-end md:absolute top-0 right-0 md:mb-8 gap-4">
          <button className="button-prev-pack border-primary-main text-primary-main border hover:bg-primary-main hover:text-white rounded md:p-2 p-1 max-md:px-2">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="button-next-pack border-primary-main text-primary-main border hover:bg-primary-main hover:text-white rounded md:p-2 p-1 max-md:px-2">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".button-next-pack",
          prevEl: ".button-prev-pack",
        }}
        loop="true"
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=" max-md:my-2 md:mt-10"
      >
        {packagesData.map((pkg, i) => (
          <SwiperSlide
            key={pkg.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-52 sm:h-56 object-cover"
              />
              <div className="absolute top-44 sm:top-48 flex justify-between w-full px-2">
                <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
                  {pkg.duration}
                </span>
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {pkg.discount}
                </span>
              </div>
            </div>

            {/* Package Details */}
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-bold mb-2">{pkg.title}</h2>

              {/* Rating */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${
                      index < pkg.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  ></i>
                ))}
              </div>

              {/* Highlights */}
              <ul className="text-sm text-gray-700 mb-2">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index}>• {highlight}</li>
                ))}
              </ul>

              {/* Pricing & Button Section */}
              <div className="flex flex-row justify-between items-center">
                <div>
                  <div className="text-lg font-bold text-green-600">
                    {pkg.price}
                  </div>
                  <div className="text-xl sm:text-2xl text-green-600 mb-1">
                    ({pkg.inrPrice})
                  </div>
                  <div className="text-xs text-gray-500">
                    Total package cost
                  </div>
                </div>
                <Link href={`/packages/${pkg.link}`} className="bg-primary-main text-white text-sm font-bold px-4 py-2 rounded flex items-center mt-3 sm:mt-0">
                  <i className="fas fa-book mr-2"></i> View Tour
                </Link>
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-4 gap-4 mt-3">
                <Link
                  href={
                    "https://api.whatsapp.com/send?phone=+971565771119&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?"
                  }
                  className="border border-primary-main text-primary-main hover:bg-primary-main hover:text-white text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                </Link>
                <Link
                  href={"tel:+971565771119"}
                  className="col-span-3 text-center border border-primary-main hover:bg-primary-main hover:text-white text-primary-main text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full"
                >
                  Request Callback
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <Link
          href={"/packages"}
          className="inline-block rounded text-primary-main md:text-base sm:text-sm text-xs font-medium md:leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit md:px-10 max-md:px-5 p-2 max-md:mt-2"
        >
          All Packages
        </Link>
      </div>
    </div>
  );
};

export default HomePackage;
