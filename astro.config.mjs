import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  server: {
    port: 5173,
  },
  site: 'https://franciscojaviermartin.github.io',
  base: 'udemy-clone-tailwind',
});
