/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111828",
        secondary: "#16BFFD",
        tertiary: "#43CEA2",
        quaternary: "#4B5563",
      },
      backgroundImage: {
        "hero-bg": "url('./assets/img/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
