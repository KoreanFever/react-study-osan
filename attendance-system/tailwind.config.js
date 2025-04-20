/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1.25': '0.3125rem',
        '2.5': '0.625rem',
      }
    },
  },
  plugins: [],
} 