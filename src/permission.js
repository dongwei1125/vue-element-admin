import router from './router'
import store from './store'
import { getToken } from './utils/auth'

async function handleHasToken(to, from, next) {
  if (to.path === '/login') {
    return next({ path: '/' })
  }

  const hasRoles = store.getters.roles?.length > 0

  if (hasRoles) return next()

  try {
    const { roles } = await store.dispatch('user/getInfo')
    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

    router.addRoutes(accessRoutes)

    next()
  } catch (error) {
    next(`/login?redirect=${to.path}`)
  }
}

function handleNoToken(to, from, next) {
  if (to.path === '/login') {
    next()
  } else {
    next(`/login?redirect=${to.path}`)
  }
}

router.beforeEach(async (to, from, next) => {
  const hasToken = !!getToken()

  if (hasToken) {
    await handleHasToken(to, from, next)
  } else {
    handleNoToken(to, from, next)
  }
})
