/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This is the magic line
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}