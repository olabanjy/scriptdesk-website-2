/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        HeroImage: "url('/src/assets/heroBG.svg')",
      },
      fontFamily: {
        CeraGr: ["Cera Gr", "sans-serif"],
      },
    },
  },
  plugins: [],
};
