/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#26C8B8',
        'secondary': '#828282',
        'success': '#5cb85c',
        'danger': {
          50: '#FDE8E8',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '#EF4444'
        },
        'white': '#FFFFFF',
        'black': '#000',
        'purple': '#B693F8',
        'gray': {
          50: '',
          100: '#040201'
        }
      },

      fontFamily: {
        'sans': ['TT Commons', 'Helvetica', 'Arial', 'sans-serif'],
        'tt-commons-bold': ['TT Commons Bold', 'sans-serif'],
        'tt-commons-medium': ['TT Commons Medium', 'sans-serif'],
      }
    }
  },
  plugins: [nativewind()],
}

