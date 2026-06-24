import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      // https://react.dev/
      react(),
    ],

    server: {
      port: 8000
    }
  }
});
