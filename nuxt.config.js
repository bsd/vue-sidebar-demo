module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-sidebar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue component demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  postcss: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('postcss-url')
  ],
  css: [
    '@/assets/css/normalize.css'
  ],
  plugins: ['~/plugins/icons'],
  build: {

  }
}
