module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#009FF5",
        "secondary": "#007CBE",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl":"1124px",

      }
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
};
