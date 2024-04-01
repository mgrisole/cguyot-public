import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  site: 'https://mgrisole.github.io/',
  base: '/cguyot-public',
  devToolbar: {
    enabled: true
  },
  integrations: [tailwind(), solidJs(), tunnel()]
});
