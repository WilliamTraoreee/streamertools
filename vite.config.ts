import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import inertia from '@adonisjs/inertia/client'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    react(),
    unocss(),
    inertia({}),
    adonisjs({
      entrypoints: ['resources/css/app.css', 'resources/js/app.js'],
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
