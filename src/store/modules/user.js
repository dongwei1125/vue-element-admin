import { getCookies, setCookies } from '@/utils/cookies'
import { TokenKey } from '@/utils/const'

const state = {
  token: getCookies(TokenKey),
  roles: [],
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token

    setCookies(TokenKey, token)
  },
}

const actions = {
  login({ commit }, form) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_TOKEN', 'token')
        resolve()
      }, 1000)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
