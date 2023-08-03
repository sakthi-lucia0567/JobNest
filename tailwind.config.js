const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        thin: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        extrabold: 900,
      },
      colors: {
        dark: {
          text: "#f1f3f2",
          background: "#111311",
          primary: "#786874",
          secondary: "#1e1b1a",
          accent: "#8a7a88",
        },
        light: {
          text: "#111311",
          background: "#f1f3f2",
          primary: "#786874",
          secondary: "#eae7e6",
          accent: "#393238",
        },
        variants: {
          extend: {
            backgroundColor: ["dark", "dark-hover", "dark-group-hover"],
            textColor: ["dark", "dark-hover", "dark-group-hover"],
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
