/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '7%': '7%',
      }
    },
    colors: {
      "neoBlue": '#00FFED',
      "darkBlue": "#000917",
      "white": "#ffffff"
    },
    fontFamily:{
      "chakra": "Chakra Petch, sans-serif",
    }
  },
  plugins: [],
}