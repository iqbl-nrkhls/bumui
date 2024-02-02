/** @type {import('tailwindcss').Config} */
import tailwindConfig from "./tailwind.config";

export default {
  content: ["./index.html", "./src/components/**/*.vue"],
  ...tailwindConfig,
};
