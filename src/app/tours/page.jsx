import React from 'react'
import PackageHero from '../_components/package-hero'
import Tour from '../_components/tour'

export default function page() {
  return (
    <div>
      <PackageHero name={"Tours"}  img={"/assets/images/hero-section/04.jpg"} page={"tours"} />
      <Tour />
    </div>
  )
}
