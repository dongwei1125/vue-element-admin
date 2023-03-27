import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './modules/constant'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constantRoutes,
})

export default router
