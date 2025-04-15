import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      shared: "/src/shared",
      features: "/src/features",
      types: "/src/types"
    },
  },
})
