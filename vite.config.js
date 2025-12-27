import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-portfolio/', // Important for GitHub Pages
  plugins: [react()],
});
