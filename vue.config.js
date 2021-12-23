module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`,
      },
    },
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}
