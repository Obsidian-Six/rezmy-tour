import { Montserrat , Londrina_Sketch } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight

  export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight:['300','400','500','600','700','800']
  });

  export const londrinasketch = Londrina_Sketch({
    subsets: ["latin"],
    weight:['400']
  });
    
    