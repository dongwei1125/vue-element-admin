const path = require('path')
const webpack = require('webpack')
const { defineConfig } = require('@vue/cli-service')

const createThemeColorReplacerPlugin = require('./plugins/createThemeColorReplacerPlugin')

const resolve = dir => path.join(__dirname, dir)

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: './',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      createThemeColorReplacerPlugin(),
    ],
  },
  chainWebpack: config => {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
  devServer: {
    setupMiddlewares: require('./mock/server.js'),
  },
})
