/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        myGray: "#2A2F35",
        innerGray: "#282C35",
        myWhite: "#EAF1F6",
      },
    },
  },
  plugins: [require("daisyui")],
};
