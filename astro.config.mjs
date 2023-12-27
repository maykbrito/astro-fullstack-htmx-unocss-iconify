import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true // or a path to the reset file
  })],

  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  })
});