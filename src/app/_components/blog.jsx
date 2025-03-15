/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { blogData } from "../blogs/page";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function Blog() {
  // const blogData = [
  //   {
  //     id: 1,
  //     title: "Exploring the Wonders of Dubai",
  //     category: "Dubai Travel Guide",
  //     description: "Discover the iconic landmarks, luxurious resorts, and adventure-filled activities that make Dubai a top tourist destination.",
  //     image:"/assets/images/blogs/01.jpg",
  //     link: "/blog/exploring-dubai",
  //     date: "2024-11-15"
  //   },
  //   {
  //     id: 2,
  //     title: "Skydiving over the Palm",
  //     category: "Dubai Adventure",
  //     description: "From skydiving over the Palm Jumeirah to visiting the Burj Khalifa, check out the top 5 thrilling activities you can't miss in Dubai.",
  //     image:"/assets/images/blogs/02.jpg",
  //     link: "/blog/top-5-things-to-do-in-dubai",
  //     date: "2024-11-10"
  //   },
  //   {
  //     id: 3,
  //     title: "A Guide to Dubai's Luxury Shopping",
  //     category: "Dubai Shopping",
  //     description: "Explore the world’s most luxurious shopping destinations, from the Dubai Mall to the Mall of the Emirates, and everything in between.",
  //     image:"/assets/images/07.jpg",
  //     link: "/blog/guide-to-luxury-shopping-in-dubai",
  //     date: "2024-11-05"
  //   },
  //   {
  //     id: 4,
  //     title: "Best Beaches in Dubai for Relaxation",
  //     category: "Dubai Relaxation",
  //     description: "Looking for a serene beach getaway? Here are the top beaches in Dubai where you can relax and unwind.",
  //     image: "/assets/images/07.jpg",
  //     link: "/blog/best-beaches-in-dubai",
  //     date: "2024-11-01"
  //   },
  // ];
  return (
    <div className="max-w-6xl mx-auto xl:px-0 px-8 my-6 relative">
      <div className="mt-10 max-md:my-5 flex justify-between items-center">
        <div className="w-full max-md:hidden"></div>
        <div className="md:text-3xl sm:text-2xl text-xl font-bold tracking-tight text-black-main text-center md:w-full">
          Blogs
        </div>
        <div className=" flex justify-end gap-4 md:w-full items-center">
          <button className="button-prev-blog ">
            <FaCircleChevronLeft className="md:text-4xl text-3xl hover:text-primary-main hover:bg-white text-[#B3B3B3] rounded-full " />
          </button>
          <button className="button-next-blog">
            <FaCircleChevronRight className="md:text-4xl text-3xl hover:text-primary-main hover:bg-white text-[#B3B3B3] rounded-full " />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".button-next-blog",
          prevEl: ".button-prev-blog",
        }}
        loop="true"
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className=" max-md:my-2 md:mt-10"
      >
        {blogData.map((blog) => (
          <SwiperSlide
            key={blog.id}
            className="relative flex flex-col sm:flex-row xl:flex-col items-start"
          >
            <div className="relative mb-6 shadow-md rounded-lg overflow-hidden bg-secondary-main/10 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full h-44">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover h-full w-full"
                fill
                src={blog.image}
                alt={blog.title}
              />
            </div>
            <div className=" sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-primary-main font-semibold text-lg">
                <span
                  className={`mb-1 block text-sm text-black-main leading-6 ${blog.categoryColor}`}
                >
                  {blog.category}
                </span>
                {blog.title}
              </h3>
              <p className="text-secondary-main text-base mt-2 leading-6">
                {blog.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <Link
          href={"/blogs"}
          className="inline-block rounded bg-primary-main md:text-base sm:text-sm text-xs font-medium md:leading-normal text-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit md:px-10 max-md:px-5 md:mt-6 p-2 max-md:mt-2"
        >
          More Blogs
        </Link>
      </div>
    </div>
  );
}
