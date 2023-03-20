// https://nuxt.com/docs/api/configuration/nuxt-config
// // export default defineNuxtConfig({

// })

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: "src",

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@kevinmarrec/nuxt-pwa', 
    '@nuxt/image-edge', 
  ],
  pwa: {
    workbox: {
      // the way to enable pwa is to remove "enabled: false" from below
      // enabled: false
    },
  },
  head: {
    title: 'RCN Lagos',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Towards the rebirth of Apostolic Christianity. We are a ministry with a single minded focus on restoring the prayer commission of the church in fulfillment of Jesus proclamation in Matthew 21:13 that My house shall be called the house of prayer' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', property: 'og:image', content: "https://rcnlagos.netlify.app/banner_1920x1080.jpg" },
      { hid: 'og:title', property: 'og:title', content: "RCN Lagos" },
      { hid: 'og:name', property: 'og:name', content: "RCN Lagos" },
      { hid: 'og:name', property: 'og:name', content: "RCN Lagos" },
      { hid: 'og:type', property: 'og:type', content: "website" },
      { hid: 'og:description', property: 'og:description', content: 'Towards the rebirth of Apostolic Christianity. We are a ministry with a single minded focus on restoring the prayer commission of the church in fulfillment of Jesus proclamation in Matthew 21:13 that My house shall be called the house of prayer' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'JPEG' },
      { hid: 'og:url', property: 'og:url', content: "https://rcnlagos.netlify.app/" },
      { hid: 'keywords', name: 'keywords', content: 'rcn, rcnlagos, rcn lagos, apostolic, rebirth, transformation, christianity, Matthew 21:13, remnant, network, voice of one, the convergence, threshing floor, 10 hours' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: "tMUZvECDdArLkf1afuUeeitDTq2FoiFBeI86smuHx2g" },
      { hid: "robots", name: "robots", content: "index,follow" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}