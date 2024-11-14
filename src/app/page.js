"use client"

import HeroSection from "./_components/hero-section";
import HomePackage from "./_components/home-package";
import HomeAbout from "./_components/home-about";
import HomeContact from "./_components/home-contact";
import { montserrat } from "./font";
import Marquee from "react-fast-marquee";
import TestinomalSlider from "./_components/testinomal-slider";
import TourImageMarquee from "./_components/tour-image-marquee";
import { useDispatch } from "react-redux";
import { openModal } from "./redux/modelSlice/modelSlice";
import Blog from "./_components/blog";

export default function Home() {
  
  return (
    <div className={montserrat.className}>
     <HeroSection />
     <HomePackage />
     <HomeAbout />
     <TestinomalSlider />
     <HomeContact />
     <Blog />
     <TourImageMarquee />
    </div>
  );
}
