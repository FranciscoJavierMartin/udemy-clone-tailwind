import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 5173,
  },
  site: 'https://franciscojaviermartin.github.io',
  base: 'udemy-clone-tailwind',
});
