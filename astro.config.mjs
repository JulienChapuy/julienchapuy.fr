import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://julienchapuy.fr',
  integrations: [react()],
  vite: {
    build: {
      chunkSizeWarningLimit: 2500,
    },
  },
});
