/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#060918',
        'primary': '#919bba',
        'secondary': '#f1f2f5',
        'dark-blue': '#6919ff',
      },
    },
  },
  plugins: [],
}