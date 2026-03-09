import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://caribehospitality.com',
  outDir: './output',
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
      applyBaseStyles: false,
    }),
  ],
});
