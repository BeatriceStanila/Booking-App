/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    backgroundImage: {
      "hero-pattern": "url('./public/hero.jpg')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
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
      green: "#62D2A2",
      darkGreen: "#679B9B",
      logo: "#03072b",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      dancing: ["Dancing Script", "cursive"],
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widestt: ".25em",
    },
    extend: {},
  },
  plugins: [],
};
