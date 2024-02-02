/** @type {import('tailwindcss').Config} */
import tailwindConfig from "./tailwind.config";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  ...tailwindConfig,
};
