// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://techfynews.pages.dev',

  // ✅ THIS IS THE REQUIRED FIX
  output: 'static',

  base: '/',

  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: [
          '.',
          path.resolve('./src/assets'),
        ],
      },
    },
  },

  integrations: [mdx(), icon(), sitemap()],
});
