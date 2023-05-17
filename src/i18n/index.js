import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getCookies } from '@/utils/cookies'
import messages from './lang'

Vue.use(VueI18n)

export function getLanguage() {
  const language = getCookies('language')

  if (language) {
    return language
  }

  const browserLanguage = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)

  for (const locale of locales) {
    if (browserLanguage.includes(locale)) {
      return locale
    }
  }

  return 'en'
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
})

export default i18n
