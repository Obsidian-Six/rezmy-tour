/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head';

import React from 'react'
import Navbar from '../_components/navbar'
import NewPackages from '../_components/packages'
import PackageHero from '../_components/package-hero'

export default function Packages() {
  return (
    <>
      <Head>
        <title>Packages - Rezmytour</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N98F7JV2');`,
          }}
        ></script>
      </Head>
      <div>
         <PackageHero name={"Packages"}  img={"/assets/images/hero-section/04.jpg"} page={"Packages"} />
       <NewPackages />
        {/* Your Packages page content */}
      </div>
    </>
  );
}





// const Pack = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Pack