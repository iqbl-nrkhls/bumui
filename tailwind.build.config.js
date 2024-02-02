/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08A94C",
      },
    },
  },
  plugins: [],
};
