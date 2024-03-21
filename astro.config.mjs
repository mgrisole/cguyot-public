import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://mgrisole.github.io/',
  base: '/cguyot-public',
  integrations: [tailwind(), solidJs()]
});
