// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#281A51",
        secondary: "#00ff00",
      },
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};