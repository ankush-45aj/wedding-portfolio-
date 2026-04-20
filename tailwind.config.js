/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  primary: "#EEE9E1",     // slightly deeper than before (better section contrast)
  secondary: "#DDD4C4",   // more visible separation
  accent: "#e29c32ff",      // deeper gold (less washed out)
  textMain: "#121212",    // stronger than #1A1A1A (better readability)
  textLight: "#696464ff",   // darker gray for better visibility
  white: "#FFFFFF",
  black: "#000000",
},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
