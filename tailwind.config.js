

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      colors: {
        transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#0f0f11',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'pink' : '#e97ef4',
      },
    },
    extend: {
      FontFamily: {
        Poppins: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}
