// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/** Copies sitemap-index.xml → sitemap.xml so /sitemap.xml resolves on static hosts */
const sitemapAlias = {
  name: 'sitemap-alias',
  hooks: {
    'astro:build:done': (/** @type {{ dir: URL }} */ { dir }) => {
      copyFileSync(
        fileURLToPath(new URL('sitemap-index.xml', dir)),
        fileURLToPath(new URL('sitemap.xml', dir)),
      );
    },
  },
};

export default defineConfig({
  site: 'https://www.lucasua.com',
  base: '/',
  integrations: [sitemap(), sitemapAlias],
});
