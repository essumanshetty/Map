// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@arcgis/core': path.resolve(
        __dirname,
        'node_modules/@arcgis/core'
      ),
    },
  },
  optimizeDeps: {
    include: ['@arcgis/core'],
  },
});
