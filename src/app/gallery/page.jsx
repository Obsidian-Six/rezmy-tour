import React from 'react'
import PackageHero from '../_components/package-hero'
import Gallery from '../_components/gallery'

export default function page() {
  return (
    <div>
      
      <PackageHero name={"Gallery"} img={"/assets/images/about-images/12.jpg"} page={'gallery'} />
      <Gallery />
    </div>
  )
}
