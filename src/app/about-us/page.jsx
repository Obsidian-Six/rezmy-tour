
import React from 'react'
import HomeAbout from '../_components/home-about'
import PackageHero from '../_components/package-hero'
import AboutPageComp from '../_components/about-page-comp';

const AboutUs = () => {
 
  return (
    <div>
      <PackageHero name={"About Us"} img={"/assets/images/12.jpg"} page={'About Us'} />
      <AboutPageComp />
    </div>
  );
}

export default AboutUs;
