module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('../../public/images/bg-desktop.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
