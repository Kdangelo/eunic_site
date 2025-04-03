import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/eunic_site/' : '/', // Replace "eunic_site" with your repo name
  build: {
    outDir: 'dist',
  },
}));
