import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  server: {
    port: 5173,
    strictPort: true, // Fallisce se la porta è già in uso
    proxy: {
      '/SirioApi': {
        target: 'http://localhost:5003',
        changeOrigin: true,
      }
    }
  }
})
