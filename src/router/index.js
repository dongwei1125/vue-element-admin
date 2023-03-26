import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './modules/common'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
