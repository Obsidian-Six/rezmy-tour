import { Montserrat , Londrina_Sketch } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight

  export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
  });

  export const londrinasketch = Londrina_Sketch({
    subsets: ["latin"],
    weight:['400']
  });
    
    