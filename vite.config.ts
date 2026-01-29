
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';
import type { Plugin } from 'vite';

const spaFallback: Plugin = {
  name: 'spa-fallback',
  configureServer(server) {
    server.middlewares.use(history());
  },
};

export default defineConfig({
  plugins: [react(), spaFallback],
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
