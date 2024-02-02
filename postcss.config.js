const isProduction = process.env.NODE_ENV == "production";

export default {
  plugins: {
    tailwindcss: {
      config: isProduction
        ? "./tailwind.build.config.js"
        : "./tailwind.dev.config.js",
    },
    autoprefixer: {},
  },
};
