import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { analyzer } from 'vite-bundle-analyzer'

// Внеси настройки конфигурации для vite-bundle-analyzer внутри analyzer

export default defineConfig({
  plugins: [
    react(),
    analyzer({

    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
})