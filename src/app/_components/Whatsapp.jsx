/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Whatsapp() {
  return (
    <div>
      <Link
        href="https://api.whatsapp.com/send?phone=+971565771119&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?"
        target="_blank"
        className="fixed text-4xl right-0 bottom-[3vw] z-30 max-sm:p-4"
      >
        <div className="grid justify-items-center gap-2">
          <div className="bg-white shadow-lg rounded-l-lg p-1">
            <img
              src="/assets/svg/WhatsApp.svg"
              alt=""
              className=" my-float h-12 w-12"
            />
          </div>
          {/* <p className="text-[#707070] text-sm pl-1">Talk to us?</p> */}
        </div>
      </Link>
    </div>
  );
}
