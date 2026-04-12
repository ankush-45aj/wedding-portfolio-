/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#5A6B57",
        beige: "#F5F1E9",
        brown: "#C8B6A6",
        gold: "#C9A96E",
        dark: "#1A1A1A",
        light: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
