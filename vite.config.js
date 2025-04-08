import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Для спрощеного імпорту компонентів з src
    },
  },
  build: {
    outDir: 'dist',  // Уточнити директорію збірки
  },
  publicDir: 'public',  // Вказує на директорію public для статичних файлів
})
