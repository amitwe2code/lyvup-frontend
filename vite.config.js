import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:'0.0.0.0',
    strictPort:true,
<<<<<<< HEAD
    port:5050
=======
    port:8080
>>>>>>> 256ffc4 (user mananement deploy)
  }
})