/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#F2E5E5",
      secondary: "#E8C4C4",
      base: "#CE7777",
      navbar: "#2B3A55",
      cream: "#FDEFEF",
      white: "#fff",
      btn: "#F2789F",
      btnHover: "#F999B7",
      card: "#FFDDD2",
      title: "#2C3333",
      body: "#282A3A",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      dancing: ["Dancing Script", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
