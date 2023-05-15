import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

import enLocale from './en'
import zhLocale from './zh'

const messages = {
  en: {
    ...elementEnLocale,
    ...enLocale,
  },
  zh: {
    ...elementZhLocale,
    ...zhLocale,
  },
}

export default messages
