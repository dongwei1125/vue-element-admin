import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './utils/auth'
import { getPageTitle } from './utils'

NProgress.configure({ showSpinner: false })

/**
 * @param {Object} to
 * @param {Object} from
 * @param {Function} next
 */
async function handleHasToken(to, from, next) {
  if (to.path === '/login') {
    next({ path: '/' })
    NProgress.done()

    return
  }

  const hasRoles = store.getters.roles?.length > 0

  if (hasRoles) {
    next()

    return
  }

  try {
    const { roles } = await store.dispatch('user/getInfo')
    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

    router.addRoutes(accessRoutes)

    next({ ...to, replace: true })
  } catch (error) {
    await store.dispatch('user/removeToken')

    next(`/login?redirect=${to.path}`)
  }
}

/**
 * @param {Object} to
 * @param {Object} from
 * @param {Function} next
 */
function handleNoToken(to, from, next) {
  if (to.path === '/login') {
    next()
  } else {
    next(`/login?redirect=${to.path}`)
  }
}

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()

  if (hasToken) {
    await handleHasToken(to, from, next)
  } else {
    handleNoToken(to, from, next)
  }
})

router.afterEach(() => {
  NProgress.done()
})
