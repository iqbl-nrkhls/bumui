import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BUMUI DOCS",
  description: "BUMA UI Library",
  themeConfig: {
    sidebar: [
      {
        text: "Component",
        items: [
          { text: "Button", link: "/button" },
          { text: "Pagination", link: "/pagination" },
          { text: "Modal", link: "/modal" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
