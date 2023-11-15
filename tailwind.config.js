/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        serif: ["DM Serif Display"],
        inter: ["Inter"],
      },
      colors: {
        light: "#EADEDA",
        dark: "#172121",
        pink: "#CA6680",
        brown: "#6F1A07",
        sage: "#6A8E7F",
      },
    },
  },
  plugins: [],
};
