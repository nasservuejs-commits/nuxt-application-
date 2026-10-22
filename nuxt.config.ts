// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

declare const process: { env: { CURRENCYAPI_KEY?: string } };

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
    app: {
    head: {
      title: 'Nuxt', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: 'Everything about Nuxt'
        }
      ],
      link: [
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      ],
    },
  },
   runtimeConfig: {
    currencyApiKey: process.env.CURRENCYAPI_KEY
  }
});
