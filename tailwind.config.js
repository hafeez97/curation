/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 640px) { ... }

      'laptop': '776px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontFamily: {
        'sans': 'Paytone One',
        'robo': 'Roboto',
      },
    },
  },
  plugins: [],
}
