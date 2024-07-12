// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    server: {
        hmr: {
            protocol: 'ws',
            host: 'localhost'
        },
        watch: {
            usePolling: true,
            interval: 1000,
        },
    },
  }
});
