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
      "white": "#ffffff",
      "neoBlueLight": '#00ffed26',
      "lightGrey": '#E8FFFD'
    },
    fontFamily:{
      "chakra": "Chakra Petch, sans-serif",
    },
    screens: {
      'ssm':'450px',
      // => @media (min-width: 450px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}