/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D2D2D',
        secondary: '#b28b78',
        accent: '#b28b78',
      },
      fontFamily: {
        // Prefer Arsenica for the serif family so `font-serif` uses Arsenica first.
        // Falls back to Texturina and the generic serif.
        serif: ['Rochester', 'cursive '],
        sans: ['Palanquin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
