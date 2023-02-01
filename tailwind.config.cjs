/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#3A3B3C'
      },
      fontFamily: {
        georgia: ['georgia', 'sans-serif'],
        poppins: ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}