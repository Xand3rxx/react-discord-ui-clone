// const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        success: "#50cd89",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      spacing: {
        88: "22rem",
      },
      fontFamily: {
        // Rampart: ["Rampart One", "cursive"],
        Poppins: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
