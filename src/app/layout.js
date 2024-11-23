/* eslint-disable @next/next/next-script-for-ga */
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Providers } from "./redux/provider";
import FormPopup from "./_components/form-popup";
import "react-toastify/dist/ReactToastify.css";
import Whatsapp from "./_components/Whatsapp";
import Head from "next/head";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rezmytour",
  description: `Explore World with Rezmytour – your one-stop travel guide for luxury stays, thrilling adventures, and personalized packages. Plan your dream getaway today!`,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayoutFor({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16778951876"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'AW-16778951876');
    `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N98F7JV2"
            height="0"
            width="0"
            style={{display:"none" , visibility:"hidden"}}
          >

          </iframe>
        </noscript> */}
        <Providers>
          <Navbar />
          <FormPopup />
          <Whatsapp />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
