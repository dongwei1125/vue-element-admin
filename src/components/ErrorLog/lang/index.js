import en from './en'
import zh from './zh'

export default {
  beforeCreate() {
    this.$i18n.mergeLocaleMessage('en', en)
    this.$i18n.mergeLocaleMessage('zh', zh)
  },
}
