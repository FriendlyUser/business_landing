import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-svgo'
      ],
      alias: {
        'components': resolve(__dirname, './src/components'),
      },
      app: {
        pageTransition: { name: 'page', mode: 'out-in' }
      },
})
