import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Providers } from "./redux/provider";
import FormPopup from "./_components/form-popup";
import 'react-toastify/dist/ReactToastify.css';
import Whatsapp from "./_components/Whatsapp";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
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
