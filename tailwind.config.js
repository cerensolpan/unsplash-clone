/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

// helper
const shadeColor = (col, amt) => {

  let usePound = false;

  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }

  let num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

const grayColor = '#767676';

const gray = {
  DEFAULT: grayColor,
  50: shadeColor(grayColor, 190),
  100: shadeColor(grayColor, 140),
  200: shadeColor(grayColor, 90),
  300: shadeColor(grayColor, 60),
  400: shadeColor(grayColor, 40),
  500: grayColor,
  600: shadeColor(grayColor, -20)
};
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': gray,
    },
    fontSize: {
      '2xs': '.65rem',
      'xs': '.7rem',
      'sm': '.8rem',
      'base': '.875rem',
      'lg': '1rem',
      'xl': '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '1.875rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '5rem',
  },
    },
  },
  plugins: [require('tailwindcss'),],
}

