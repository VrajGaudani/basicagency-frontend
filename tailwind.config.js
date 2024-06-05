/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bablack: {
          400: "#252422"
        },
        bapink: {
          400: "#F9CDCD"
        },
        bawhite: {
          400: "#f4f4f4"
        },
      },
      fontFamily: {
        inter: ['Inter'],
      },
      fontSize: {
        "6.5vw": '6.5vw',
      },
      padding: {
        'containerpad': '5.4vw',
        '80px': '80px',
        '15vw': '15vw',
      },
      maxWidth: {
        '200px': '200px',
        '50%': '50%'
              }
    },
  },
  plugins: [],
}

