import elementEn from 'element-ui/lib/locale/lang/en'
import elementZh from 'element-ui/lib/locale/lang/zh-CN'

import en from './en'
import zh from './zh'

const langs = {
  en: {
    ...elementEn,
    ...en,
  },
  zh: {
    ...elementZh,
    ...zh,
  },
}

export default langs
