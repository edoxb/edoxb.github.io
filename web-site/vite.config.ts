// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 👈 importante! SOLO slash, perché è un user site
  plugins: [react()],
})
