import { Fragment } from 'react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#626F47",
        secondaryGreen: "#A4B465",
        primaryCream: "#F5ECD5",
        primaryOrange: "#E88720"
      },
      fontFamily: {
        fustat: ['Fustat', 'sans-serif'],
        fragment: ['"Fragment Mono"', 'monospace'],
        roboto: ['roboto']
      },
      
    },
  },
  plugins: [],
}
