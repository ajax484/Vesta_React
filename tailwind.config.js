module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js, jsx, ts, tsx}"
  ],

  theme: {
    extend: {
      colors: {
        vestaPurple: {
          1: '#5f43b2',
          2: '#6f2da8'
        }
      },

      fontFamily: {
        nunitoSans: ["nunito-sans", "sans-serif"]
      },

      backgroundImage: {
        "hero": "url('/src/Assets/img/national-theatre.jpg')",
        "interior": "url('/src/Assets/img/interior.jpg')",
        "girl": "url('/src/Assets/img/girl.png')",
      }
    },
  },

  plugins: [
    require('tailwindcss-textshadow')
  ],
}