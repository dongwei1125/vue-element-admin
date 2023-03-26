import router from './index'
import { getCookies } from '@/utils/cookies'
import { TokenKey } from '@/utils/const'

router.beforeEach(async (to, from, next) => {
  const hasToken = !!getCookies(TokenKey)

  if (hasToken) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
