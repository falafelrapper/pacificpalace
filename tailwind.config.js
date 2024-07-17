/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "verdana", "sans-serif"],
        futuraPt: ["futura-pt"],
        proximaNova: ["proxima-nova"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInHeader: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        intro: {
          "0%": { opacity: "1", zIndex: "100" },
          "75%": { opacity: "1", zIndex: "100" },
          "100%": { opacity: "0", zIndex: "100" },
        },
        introText: {
          "0%": { scale: "75%" },
          "100%": { scale: "100%" },
        },
      },
      animation: {
        fadeIn: "fadeIn .3s",
        fadeInHeader: "fadeInHeader .6s",
        intro: "intro linear 2s",
        introText: "introText 1s",
      },
    },
  },
  plugins: [],
}
