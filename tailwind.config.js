/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['TT Commons', 'Helvetica', 'Arial', 'sans-serif'],
      'tt-commons-bold': ['TT Commons Bold', 'sans-serif'],
      'tt-commons-medium': ['TT Commons Medium', 'sans-serif'],
    },
    colors: {
      'primary': '#26C8B8',
      'secondary': '#828282',
      'success': '#5cb85c',
      'danger': '#EF4444',
      'white': '#FFF',
      'black': '#000',
      'purple': '#B693F8'
    }
  },
  plugins: [nativewind()],
}

