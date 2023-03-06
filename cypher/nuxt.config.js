// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["normalize.css/normalize.css"],

  ssr: false,
  mode: "spa",

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/common.scss";',
        },
      },
    },
  },
});
