import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '^/graphql*': {
        target: 'http://localhost:3000/graphql',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => {
        //   // path.replace(/^\.\//, '')
        //   console.log(path);
        //   return path
        // }
      },
      '^/update/graphql*': {
        target: 'http://localhost:3000/graphql',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => {
        //   // path.replace(/^\.\//, '')
        //   console.log(path);
        //   return path
        // }
      }
    }
  }
})
