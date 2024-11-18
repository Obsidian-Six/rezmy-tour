import React from 'react'
import Navbar from '../_components/navbar'
import Packages from '../_components/packages'
import PackageHero from '../_components/package-hero'

const Pack = () => {
  return (
    <div>
         <PackageHero name={"Packages"}  img={"/assets/images/hero-section/04.jpg"} page={"Packages"} />
       <Packages />

    </div>
  )
}

export default Pack