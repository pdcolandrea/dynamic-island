/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        applePurp: "rgba(255, 0, 255, 1) 0%",
        applePurpAlt: "rgba(255, 0, 255, 0.75) 100%",
      },
    },
  },
  plugins: [],
};
