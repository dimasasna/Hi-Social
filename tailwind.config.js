/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": "Plus Jakarta Sans",
        "clash-display": "Clash Display",
      },
      width: {
        58: "14.5rem",
        98: "31.063rem",
      },
      height: {
        66: "17rem",
        84: "22rem",
        99: "37.313rem",
      },
    },
  },
  plugins: [],
};
