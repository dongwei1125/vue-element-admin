import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

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
      }, 50)
    })
  },

  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          roles: ['admin'],
          name: 'admin',
          education: 'JS in Computer Science from the University of Technology',
          skills: [
            {
              name: 'Vue',
              progress: 70,
            },
            {
              name: 'JavaScript',
              progress: 18,
            },
            {
              name: 'Css',
              progress: 12,
            },
            {
              name: 'ESLint',
              progress: 100,
            },
          ],
        }
        const { roles } = data

        commit('SET_ROLES', roles)
        commit('SET_INFO', data)

        resolve(data)
      }, 50)
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
      }, 50)
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
