import React from 'react'
import Navbar from '../_components/navbar'
import Packages from '../_components/packages'
import PackageHero from '../_components/package-hero'
import HomePackage from '../_components/home-package'

const Pack = () => {
  return (
    <div>
         <PackageHero name={"Packages"}  img={"/assets/images/hero-section/04.jpg"} page={"Packages"} />
         {/* <HomePackage /> */}
       <Packages />

    </div>
  )
}

export default Pack