/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors : {
        'custom-blue': '#239CE2',
      }
    },
  },
  plugins: [],
}
