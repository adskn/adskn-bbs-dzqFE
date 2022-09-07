import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/_colors.scss" as *; @use "@/assets/mixin.scss" as *;',
        },
      },
    },
  },
  css: ['@/assets/common/index.scss'],
});
