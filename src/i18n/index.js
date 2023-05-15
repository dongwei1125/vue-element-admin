import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getCookies } from '@/utils/cookies'
import messages from './lang'

Vue.use(VueI18n)

export function getLanguage() {
  return getCookies('language') || 'en'
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
})

export default i18n
