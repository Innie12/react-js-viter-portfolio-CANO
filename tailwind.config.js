/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["WinkySans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#374151",
        secondary: "#fffbeb",
        tertiary:"#92400e",
        dashboard: "#2B2B2B",
      },
    },
  },
  plugins: [],
};

