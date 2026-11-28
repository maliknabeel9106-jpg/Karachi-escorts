import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        companions: path.resolve(__dirname, 'companions.html'),
        services: path.resolve(__dirname, 'services.html'),
        locations: path.resolve(__dirname, 'locations.html'),
        about: path.resolve(__dirname, 'about.html'),
        faq: path.resolve(__dirname, 'faq.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        privacy: path.resolve(__dirname, 'privacy-policy.html'),
        terms: path.resolve(__dirname, 'terms.html'),
      },
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
