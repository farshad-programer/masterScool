/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // important:"#root",
  darkMode: "class",

  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],

      eng2: ["SourceSansPro-Regular", "SourceSansPro-Regular"],
      eng3: ["DancingScript-Regular", "DancingScript-Regular"],
      eng1: ["GreatVibes", "cursive"],
      Sans: ["Open Sans", "sans-serif"],
      Playfair: ["Playfair Display", "serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      keyframes: {
        "jello-horizontal": {
          "0%": {
            transform: "scale3d(1,1,1)",
          },
          "30%": {
            transform: "scale3d(1.25,.75,1)",
          },
          "40%": {
            transform: "scale3d(.75,1.25,1)",
          },
          "50%": {
            transform: "scale3d(1.15,.85,1)",
          },
          "65%": {
            transform: "scale3d(.95,1.05,1)",
          },
          "75%": {
            transform: "scale3d(1.05,.95,1)",
          },

          "100%": {
            transform: "scale3d(1,1,1)",
          },
        },
        "jello-horizontal-y": {
          "0%": {
            transform: "scale3d(1,1,1) translateY(40%)",
          },
          "30%": {
            transform: "scale3d(1.25,.75,1) translateY(28%)",
          },
          "40%": {
            transform: "scale3d(.75,1.25,1) translateY(24%)",
          },
          "50%": {
            transform: "scale3d(1.15,.85,1) translateY(20%)",
          },
          "65%": {
            transform: "scale3d(.95,1.05,1) translateY(14%)",
          },
          "75%": {
            transform: "scale3d(1.05,.95,1) translateY(10%)",
          },

          "100%": {
            transform: "scale3d(1,1,1) translateY(0)",
          },
        },
      },

      animation: {
        rolls: "jello-horizontal 0.5s   both",
        rollsY: "jello-horizontal-y 0.5s   both",
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
        1600: "1600px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/earning1.jpg')",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
