import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import inertia from '@adonisjs/inertia/client'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    react(),
    // @ts-ignore
    unocss(),
    inertia({
      ssr: {
        enabled: true,
        entrypoint: 'resources/ssr.tsx',
      },
    }),
    adonisjs({
      entrypoints: ['resources/css/app.css', 'resources/app.tsx'],
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
