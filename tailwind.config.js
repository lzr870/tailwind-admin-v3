const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      custom: ['/src/assets/fonts/DIN-Bold.otf', 'din-bold']
    },
    colors: {
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      'primary': '#0064C8',
      'success': '#18A058FF',
      'warning': '#F0A020FF',
      'error': '#D03050FF',
    }
  },
  plugins: [],
}