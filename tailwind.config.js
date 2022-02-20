module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}", "./public/**/*.html"],
  darkMode: "media",
  theme: {
    screens: {
      xs: "350px",
      sm: "500px",
      md: "700px",
      lg: "900px",
      xl: "1140px",
      "2xl": "1340px",
      "3xl": "1560px",
      "4xl": "1660px",
      "5xl": "1840px"
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 2s infinite",
        slider: "slider 30s linear infinite",
        "spin-slow": "spin 5s linear infinite",
        "slider-reverse": "slider-reverse 30s linear infinite",
        "roll-left": "roll-left 24s infinite linear"
      },
      borderRadius: {
        none: "0px",
        1: "0.0625rem",
        2: "0.125rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        10: "0.625rem",
        12: "0.75rem",
        24: "1.5rem",
        full: "9999rem"
      },
      borderWidth: {
        none: "0px",
        1: "1px",
        2: "2px",
        7: "7px"
      },
      boxShadow: {
        sm: "0px 10px 50px rgba(0, 0, 0, 0.03)"
      },
      colors: {
        transparent: "transparent",
        black: "rgba(0, 0, 0, 1)",
        white: "rgba(255, 255, 255, 1)",
        "white-0": "rgba(255, 255, 255, 0)",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-20": "rgba(255, 255, 255, 0.2)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        brown: "rgba(20, 11, 2, 1)",
        "brown-10": "rgba(20, 11, 2, .1)",
        "brown-60": "rgba(20, 11, 2, .6)",
        "brown-90": "rgba(20, 11, 2, .9)",
        "brown-dark": "rgba(203, 108, 8, 1)",
        orange: "rgba(253, 142, 25, 1)",
        "orange-60": "rgba(253, 142, 25, .6)",
        "state-brown": "rgba(18, 106, 1, 1)",
        "state-red": "rgba(218, 38, 35, 1)",
        silver: "rgba(157, 173, 176, 1)"
      },
      fontSize: {
        8: "0.5rem",
        9: "0.5625rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        48: "3rem",
        64: "4rem",
        80: "5rem",
        180: "11.25rem"
      },
      maxWidth: {
        100: "100px"
      },
      ringWidth: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem"
      },
      spacing: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        34: "2.125rem",
        36: "2.25rem",
        38: "2.375rem",
        40: "2.5rem",
        42: "2.625rem",
        44: "2.75rem",
        46: "2.875rem",
        48: "3rem",
        50: "3.125rem",
        52: "3.25rem",
        56: "3.5rem",
        58: "3.625rem",
        60: "3.75rem",
        64: "4rem",
        68: "4.25rem",
        70: "4.375rem",
        72: "4.5rem",
        74: "4.625rem",
        80: "5rem",
        84: "5.25rem",
        90: "5.625rem",
        92: "5.75rem",
        100: "6.25rem",
        120: "7.5rem",
        180: "11.25rem",
        190: "11.875rem",
        200: "12.5rem",
        220: "13.75rem",
        240: "15rem",
        250: "15.625rem",
        260: "16.25rem",
        270: "16.875rem",
        280: "17.5rem",
        300: "18.75rem",
        320: "20rem",
        400: "25rem",
        450: "28.125rem",
        520: "32.5rem"
      },
      keyframes: {
        "roll-left": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(-75%)" }
        },
        slider: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-3180px)" }
        },
        "slider-reverse": {
          "0%": { transform: "translateX(-3180px)" },
          "100%": { transform: "translateX(0px)" }
        }
      }
    }
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp")
  ]
}
