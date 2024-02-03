import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BUMUI DOCS",
  description: "BUMA UI Library",
  themeConfig: {
    sidebar: [
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "Component",
        items: [
          { text: "Button", link: "/button" },
          { text: "Pagination", link: "/pagination" },
          { text: "Input Radio", link: "/input-radio" },
          { text: "Multi Select", link: "/multiselect" },
          { text: "Modal", link: "/modal" },
        ],
      },
    ],

    socialLinks: [
      { icon: "npm", link: "https://www.npmjs.com/package/bumui-vue" },
      { icon: "github", link: "https://github.com/iqbl-nrkhls/bumui" },
    ],
  },
});
