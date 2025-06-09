import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/eunic_site/' : '/', // Replace 'eunic_site' with your repo name
  build: {
    outDir: 'dist',
  },
}));
