import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/apple-clone/', // Must match your repo name
  plugins: [react()],
});