const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')

const themePluginOption = {
  fileName: 'css/theme-colors.[contenthash:8].css',
  matchColors: forElementUI.getElementUISeries('#1890ff'),
  changeSelector: forElementUI.changeSelector,
}

const createThemeColorReplacerPlugin = () => new ThemeColorReplacer(themePluginOption)

module.exports = createThemeColorReplacerPlugin
