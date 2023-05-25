import Vue from 'vue'
import VueRouter from 'vue-router'

import constantRoutes from './modules/constant'

Vue.use(VueRouter)

const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: constantRoutes,
  })

const router = createRouter()

export function resetRouter() {
  const r = createRouter()

  router.matcher = r.matcher
}

export default router
