
module.exports = {
  mode: 'spa',
  head: {
    title: 'BFX Pro | Forex & Crytpocurrency Broker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Broker for Cryptocurrencies and Forex, Clear Pricing, 24/5 Support' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Exo+2:300,400,500,600,700&display=swap' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
    { src: '~/plugins/i18n.js', ssr: false },
    { src: '~/plugins/socket.io.js', ssr: false }
  ],
  buildModules: [
  ],
  modules: [
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  }
}
