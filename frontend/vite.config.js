import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This exposes the server to all network interfaces
    port: 5173,       // Default port, change if needed
  },
})

// vite.config.js

