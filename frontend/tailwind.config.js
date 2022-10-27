/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CC5CFF",
        secondary: "#16BFFD",
        tertiary: "#43CEA2",
        quaternary: "#4B5563",
      },
      backgroundImage: {
        "hero-bg": "url('./assets/img/image.png')",
        "login-bg": "url('./assets/img/herobg.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
};
