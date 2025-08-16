import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimizaciones de build
    rollupOptions: {
      output: {
        // Configuración de chunking para mejor caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          forms: ['@formspree/react']
        },
        // Configuración de nombres de archivos con hash para cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset';
          const info = name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash].[ext]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash].[ext]`;
          }
          return `assets/[ext]/[name]-[hash].[ext]`;
        }
      }
    },
    // Configuración de compresión con esbuild (más rápido que terser)
    minify: 'esbuild',
    // Tamaño de chunk
    chunkSizeWarningLimit: 1000,
    // Source maps para producción (opcional)
    sourcemap: false
  },
  // Configuración del servidor de desarrollo
  server: {
    headers: {
      // Headers de cache para desarrollo
      'Cache-Control': 'max-age=31536000'
    }
  },
  // Configuración del preview
  preview: {
    headers: {
      // Headers de cache para preview
      'Cache-Control': 'max-age=31536000'
    }
  }
});
