import { defineConfig } from 'unocss'
import { presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  theme: {
    colors: {
      primary: {
        light: '#538BF6',
        normal: '#2868E6',
        dark: '#0E46B3',
      },
      secondary: {
        light: '#E8FE68',
        normal: '#CBE628',
        dark: '#A5BE10',
      },
      dark: '#1D1D1D',
    },
  },
})
