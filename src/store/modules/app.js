import { getCookies, setCookies } from '@/utils/cookies'

const key = 'SIDEBAR_STATUS'

const state = {
  sidebar: {
    opened: getCookies(key) ? !!+getCookies(key) : true,
    show: true,
    logo: true,
    title: 'Vue Element Admin',
  },
}

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar.opened = !state.sidebar.opened

    setCookies(key, +state.sidebar.opened)
  },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
