import constantRoutes from '@/router/modules/constant'
import asyncRoutes from '@/router/modules/async'

/**
 * @param {Array} roles
 * @param {Object} route
 * @returns {Boolean}
 */
function hasPermission(roles, route) {
  if (Array.isArray(route.meta?.roles)) {
    return roles.some(role => route.meta.roles.includes(role))
  }

  return true
}

/**
 * @param {Array} routes
 * @param {Array} roles
 * @returns {Array}
 */
function filterAsyncRoutes(routes, roles) {
  const result = []

  routes.forEach(route => {
    const temp = { ...route }

    if (hasPermission(roles, temp)) {
      result.push(temp)

      if (temp.children?.length) {
        temp.children = filterAsyncRoutes(temp.children, roles)
      }
    }
  })

  return result
}

const state = {
  routes: [],
  addRoutes: [],
}

const mutations = {
  SET_ROUTES(state, routes) {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      const accessRoutes = filterAsyncRoutes(asyncRoutes, roles)

      commit('SET_ROUTES', accessRoutes)

      resolve(accessRoutes)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
