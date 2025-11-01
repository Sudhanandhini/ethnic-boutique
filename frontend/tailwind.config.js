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
        // Map Tailwind utilities to the Google fonts we import in src/index.css
        // This ensures `font-serif` and `font-sans` use Texturina and Palanquin.
        serif: ['Texturina', 'serif'],
        sans: ['Palanquin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
