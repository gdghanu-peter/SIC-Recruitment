export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    'vue3-carousel-nuxt',
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  srcDir: 'src',
  css: ['~/assets/css/globals.css', '~/assets/css/variables.css'],
  compatibilityDate: '2024-07-28',
  pinia: {
    storesDirs: ['~/stores/**']
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  }
})
