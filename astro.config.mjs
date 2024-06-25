import path from "path";
import { fileURLToPath } from "url";

import { defineConfig, squooshImageService } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import compress from "astro-compress";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: "static",
  site: "http://localhost:4321/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ["*"],
        "skill-icons": ["html", "css", "python-light", "javascript", "discord"],
      },
    }),
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
  ],
  image: {
    service: squooshImageService(),
    domains: [
      "cdn.pixabay.com",
      "cdn.contentful.com",
      "preview.contentful.com",
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
