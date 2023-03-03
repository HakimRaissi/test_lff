/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        "header": "0 2px 10px 0 rgba(0, 0, 0, 0.15)"
      },
      animation: {

        "astro": "astro-animation 20000ms linear infinite",

      },
      keyframes: {

        "astro-animation": {
          "0%": {
            transform: "translateY(0px)"
          },
          "10%": {
            transform: " translateY(30px) rotate(10deg)"
          },
          "20%": {
            transform: "translateY(60px) rotate(20deg)"
          },
          "30%": {
            transform: "translateY(90px) rotate(30deg)"
          },
          "40%": {
            transform: "translateY(120px) rotate(20deg)"
          },
          "50%": {
            transform: "translateY(150px) rotate(30deg)"
          },
          "60%": {
            transform: "translateY(120px) rotate(40deg)"
          },
          "70%": {
            transform: "translateY(90px) rotate(10deg)"
          },
          "80%": {
            transform: "translateY(60px) rotate(20deg)"
          },
          "90%": {
            transform: "translateY(30px) rotate(10deg)"
          },
          "100%": {
            transform: "translateY(0px)"
          }
        },

        "astro-animation": {
          "0%": {
            transform: "translateY(0px)"
          },
          "10%": {
            transform: " translateY(30px) rotate(10deg)"
          },
          "20%": {
            transform: "translateY(60px) rotate(20deg)"
          },
          "30%": {
            transform: "translateY(90px) rotate(30deg)"
          },
          "40%": {
            transform: "translateY(120px) rotate(20deg)"
          },
          "50%": {
            transform: "translateY(150px) rotate(30deg)"
          },
          "60%": {
            transform: "translateY(120px) rotate(40deg)"
          },
          "70%": {
            transform: "translateY(90px) rotate(10deg)"
          },
          "80%": {
            transform: "translateY(60px) rotate(20deg)"
          },
          "90%": {
            transform: "translateY(30px) rotate(10deg)"
          },
          "100%": {
            transform: "translateY(0px)"
          }
        }
      },
      colors: {
        // light: "#FFFDF7",
        light: "#e1e5ed",
        dark: "#171D1C",
        primary: "#006DAA",
        secondary: "#2CA58D",
        accent: "#FA824C",
        lff: "#856DA6"
      }


    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
