import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/SuperSimon/',
  build: {
    minify: 'esbuild', // Minification עם esbuild
    sourcemap: true,    // יצירת sourcemaps
    chunkSizeWarningLimit: 500, // חיתוך זהירות של קבצים גדולים
    rollupOptions: {
      output: {
        manualChunks(id) {
          // פיצול קבצים לפי ספריות
          if (id.includes('node_modules/react-konva')) {
            return 'react-konva';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },

  },
  plugins: [react()],
});
