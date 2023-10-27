const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        screens: {
          xs: "600px",
          ...defaultTheme.screens,
        },
      },
    },
  },
  plugins: [],
};
