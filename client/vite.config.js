import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons'],
    },
  },
  plugins: [react()],
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

