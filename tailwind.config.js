/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1440px",
        xl: "1440px",
        "2xl": "1440px",
      },
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        600: "1300px",
        700: "900px",
        626: "626px",
        "1px": "1px",
      },
      height: {
        434: "434.75px",
        301: "301px",
      },
      colors: {
        "main-white": "rgba(220, 220, 220, 0.6)",
        "main-black": "rgba(0, 0, 0, 1)",
        "main-hover-black": "rgba(0, 0, 0, 0.6)",
        color: "#BC1A45",
      },
      flexBasis: {
        "1/7": "20%",
      },
      spacing: {
        128: "32rem",
        130: "41rem",
      },
    },
  },
  plugins: [],
};
