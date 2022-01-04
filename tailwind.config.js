module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('../../public/images/bg-desktop.jpg')",
      },
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Lato", "sans-serif"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
