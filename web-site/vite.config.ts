// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/edoxb.github.io/', // 👈 sostituisci con il nome esatto della tua repo
  plugins: [react()],
})
