/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounceSlow: "bounceSlow 3s infinite",
        floatCloud: "floatCloud 20s linear infinite",
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatCloud: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },
    },
  },
  plugins: [],
};
