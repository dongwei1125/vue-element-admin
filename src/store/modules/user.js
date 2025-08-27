import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { login, info, logout } from '@/api/user'

const state = {
  token: getToken(),
  roles: [],
  info: {},
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token

    setToken(token)
  },

  SET_ROLES(state, roles) {
    state.roles = roles
  },

  SET_INFO(state, info) {
    state.info = info
  },
}

const actions = {
  login({ commit }, form) {
    const { username, password } = form

    return new Promise((resolve, reject) => {
      login({ username, password })
        .then(({ data }) => {
          commit('SET_TOKEN', data)

          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  info({ commit }) {
    return new Promise((resolve, reject) => {
      info().then(({ data }) => {
        const { roles } = data

        commit('SET_ROLES', roles)
        commit('SET_INFO', data)

        resolve(data)
      })
    })
  },

  logout({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        commit('SET_ROLES', [])

        resetRouter()

        dispatch('removeToken')
        dispatch('tagsView/removeAllViews', null, { root: true })

        resolve()
      })
    })
  },

  removeToken({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')

      removeToken()

      resolve()
    })
  },

  async updateRoles({ commit, dispatch }, roles) {
    commit('SET_ROLES', roles)

    resetRouter()

    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

    router.addRoutes(accessRoutes)

    dispatch('tagsView/removeAllViews', null, { root: true })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
