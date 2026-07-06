import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://basistoolkit.com',
  build: {
    inlineStylesheets: 'auto',
  },
});
