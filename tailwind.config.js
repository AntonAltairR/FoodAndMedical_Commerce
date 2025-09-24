// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C7A7B",
        secondary: "#F6AD55",
        neutral: {
          light: "#F7FAFC",
          dark: "#2D3748"
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
