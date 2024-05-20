import { Instagram } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        MainColor: "#DEB887",
        MainColorLighter: "#f7efe3",
        MainColorDarker: "#6F5C43",
        SecondaryColor: "#1a4277",
        SecondaryColorDarker: "#0c1e37",
        TheeredColor: "#87adde",
        TextColor: "#412b0e",

        facebook: "#1877F2",
        Instagram: "#C13584",
        youtube: "#FF0000",
        linkedIn: "#0762C8",
      },
      screens: {
        'vsm': '425px',
        'ml': '928px',
      },
      scale: {
        '85': '0.85',
        '80': '0.80',
      }
    },
  },
  plugins: [],
}

