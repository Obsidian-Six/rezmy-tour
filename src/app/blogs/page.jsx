/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PackageHero from '../_components/package-hero';
import Image from 'next/image';

export default function page() {
    
    const blogData = [
        {
          id: 1,
          title: "Exploring the Wonders of Dubai",
          category: "Dubai Travel Guide",
          description: "Discover the iconic landmarks, luxurious resorts, and adventure-filled activities that make Dubai a top tourist destination.",
          image: "/assets/images/07.jpg",
          link: "/blog/exploring-dubai",
          date: "2024-11-15"
        },
        {
          id: 2,
          title: "Top 5 Things to Do in Dubai",
          category: "Dubai Adventure",
          description: "From skydiving over the Palm Jumeirah to visiting the Burj Khalifa, check out the top 5 thrilling activities you can't miss in Dubai.",
          image: "/assets/images/07.jpg",
          link: "/blog/top-5-things-to-do-in-dubai",
          date: "2024-11-10"
        },
        {
          id: 3,
          title: "A Guide to Dubai's Luxury Shopping",
          category: "Dubai Shopping",
          description: "Explore the world’s most luxurious shopping destinations, from the Dubai Mall to the Mall of the Emirates, and everything in between.",
          image: "/assets/images/07.jpg",
          link: "/blog/guide-to-luxury-shopping-in-dubai",
          date: "2024-11-05"
        },
        {
          id: 4,
          title: "Best Beaches in Dubai for Relaxation",
          category: "Dubai Relaxation",
          description: "Looking for a serene beach getaway? Here are the top beaches in Dubai where you can relax and unwind.",
          image: "/assets/images/07.jpg",
          link: "/blog/best-beaches-in-dubai",
          date: "2024-11-01"
        },
        {
          id: 5,
          title: "Dubai's Hidden Gems: Off-the-Beaten-Path",
          category: "Dubai Hidden Gems",
          description: "Discover Dubai’s lesser-known attractions that will make your trip even more memorable and unique.",
          image: "/assets/images/07.jpg",
          link: "/blog/dubai-hidden-gems",
          date: "2024-10-28"
        },
        {
          id: 6,
          title: "Dining in Dubai: A Culinary Adventure",
          category: "Dubai Cuisine",
          description: "Dubai offers an eclectic mix of culinary experiences from street food to Michelin-starred restaurants. Discover the best places to eat in the city.",
          image: "/assets/images/07.jpg",
          link: "/blog/dining-in-dubai",
          date: "2024-10-25"
        },
        {
          id: 7,
          title: "A Day in the Desert: The Ultimate Dubai Experience",
          category: "Dubai Desert Adventures",
          description: "Experience the thrill of a desert safari, from dune bashing to camel rides, and discover Dubai’s desert landscapes.",
          image: "/assets/images/07.jpg",
          link: "/blog/a-day-in-the-desert-dubai",
          date: "2024-10-20"
        },
        {
          id: 8,
          title: "Dubai’s Nightlife: Partying in the City of Lights",
          category: "Dubai Nightlife",
          description: "From rooftop bars to exclusive nightclubs, explore the best places to enjoy Dubai’s vibrant nightlife scene.",
          image: "/assets/images/07.jpg",
          link: "/blog/dubai-nightlife-guide",
          date: "2024-10-15"
        },
        {
          id: 9,
          title: "Visiting the Burj Khalifa: Tips for an Unforgettable Experience",
          category: "Dubai Landmarks",
          description: "Get the most out of your Burj Khalifa experience with our tips on visiting the world’s tallest building and its observation decks.",
          image: "/assets/images/07.jpg",
          link: "/blog/visiting-the-burj-khalifa",
          date: "2024-10-10"
        }
      ];
      
      
  return (
    <div>
        
      <PackageHero name={"Blogs"} img={"/assets/images/about-images/12.jpg"} page={'blog'} />
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 max-w-6xl mx-auto">
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

    </div>
  )
}
