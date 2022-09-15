/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        orange: "#F77F00",
        yellow: "#FCBF49",
        "gray-dark": "#003049",
        gray: "#034161",
        red: "#D62828",
        blue: "#076a75",
        "gray-light": "#d3dce6",
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
