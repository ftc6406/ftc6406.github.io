import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  esbuild: {
    supported: {
      'top-level-await': true, // Targets modern browsers that can handle top-level-await features
    },
  },
});
