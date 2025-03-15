/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-main": "#301C7B",
        "secondary-main": "#7E8492",
        "heading-main": "#28292D",
        "black-main":'#1E1E1E',
        "background-main":"#F3F4FB"
      },
    },
  },
  plugins: [],
};
