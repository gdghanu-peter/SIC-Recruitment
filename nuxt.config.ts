export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    'vue3-carousel-nuxt'
  ],
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  srcDir: 'src',
  css: ['~/assets/css/globals.css', '~/assets/css/variables.css'],
  compatibilityDate: '2024-07-28'
})
