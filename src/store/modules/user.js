import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_TOKEN', +new Date())

        resolve()
      }, 20)
    })
  },

  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          roles: ['admin', 'user'],
          name: 'admin',
        }
        const { roles } = data

        commit('SET_ROLES', roles)
        commit('SET_INFO', data)

        resolve(data)
      }, 20)
    })
  },

  logout({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_ROLES', [])

        resetRouter()

        dispatch('removeToken')
        dispatch('tagsView/removeAllViews', null, { root: true })

        resolve()
      }, 20)
    })
  },

  removeToken({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')

      removeToken()

      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
