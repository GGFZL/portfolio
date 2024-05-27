/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        myColor : '#d4c8be',
        myColorDarker1 : '#b8ad9b',
        myColorDarker2 : '#a89c86',
        myColorDarker3 : '#9c8a75',
        myColorDarker4 : '#8a775f',
        matBlack : '#28282b',
      },
    },
  },
  plugins: [],
}

