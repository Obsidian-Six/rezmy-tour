/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Blog() {
       
  const blogData = [
    {
      id: 1,
      title: "Exploring the Wonders of Dubai",
      category: "Dubai Travel Guide",
      description: "Discover the iconic landmarks, luxurious resorts, and adventure-filled activities that make Dubai a top tourist destination.",
      image:"/assets/images/blogs/01.jpg",
      link: "/blog/exploring-dubai",
      date: "2024-11-15"
    },
    {
      id: 2,
      title: "Skydiving over the Palm",
      category: "Dubai Adventure",
      description: "From skydiving over the Palm Jumeirah to visiting the Burj Khalifa, check out the top 5 thrilling activities you can't miss in Dubai.",
      image:"/assets/images/blogs/02.jpg",
      link: "/blog/top-5-things-to-do-in-dubai",
      date: "2024-11-10"
    },
    {
      id: 3,
      title: "A Guide to Dubai's Luxury Shopping",
      category: "Dubai Shopping",
      description: "Explore the world’s most luxurious shopping destinations, from the Dubai Mall to the Mall of the Emirates, and everything in between.",
      image:"/assets/images/07.jpg",
      link: "/blog/guide-to-luxury-shopping-in-dubai",
      date: "2024-11-05"
    }
  ];
  return (
    <div className='max-w-6xl mx-auto xl:px-0 px-8 my-6'>
        <div className="md:mt-10 max-md:mt-5 flex md:justify-between max-md:justify-center items-center">
        <h2 className="md:text-3xl sm:text-2xl text-base max-md:text-center font-bold tracking-tight text-gray-900 dark:text-black">
          Our Blogs
        </h2>       
      </div>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start my-6 max-w-6xl mx-auto">
        {blogData.map((blog) => (
        <li key={blog.id} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-heading-main font-semibold text-lg">
              <span className={`mb-1 block text-sm leading-6 ${blog.categoryColor}`}>
                {blog.category}
              </span>
              {blog.title}
            </h3>
            <p className="text-secondary-main text-base mt-2">{blog.description}</p>
          </div>
          <div className='relative mb-6 shadow-md rounded-lg overflow-hidden bg-secondary-main/10 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full h-44'>
            <Image
                className="object-cover h-full w-full"
                fill
                src={blog.image}
                alt={blog.title}
            />

          </div>
        </li>
      ))}
            
        </ul>
        <div className="flex justify-center">
        <Link
          href={'/blogs'}
            className="inline-block rounded text-primary-main md:text-base sm:text-sm text-xs font-medium md:leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit md:px-10 max-md:px-5 md:mt-6 p-2 max-md:mt-2"
          >
            View More
          </Link>
        </div>

    </div>
  )
}
