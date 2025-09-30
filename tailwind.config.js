/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#9e0000',
        'bg': '#080808',
        'second-bg': '#131313',
      },
      dropShadow: {
        'glow': '0 0 25px rgba(158, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}