/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/views/**/*.{html,js,ejs}","./public/**/*.{css,js}"],
  theme: {
    extend: {
      colors: {
        dim: "#2A2C3B",
        offgray: "#585868",
        brightgray : "#767687",
        dark: '#1E1D2B',
        offwhite: "#F1F1F1",
        gray: '#bbbbbb',
        graytext: "#C8C8C8",

    },
    backgroundImage: {
        'blur': 'url("./ss-bg.png")',
        'accent-grad': 'linear-gradient(to bottom left, #7F3DF5, #EC4899)'

    },
    fontFamily: {
        'serif': "DM Serif Display",
        'sen': 'sen'
    }
    },
  },
  plugins: [],
}