import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "fintrack",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['ts-big-decimal']
  },
})
