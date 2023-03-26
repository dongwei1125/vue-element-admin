import { getCookies, setCookies } from '@/utils/cookies'
import { SideBarKey } from '@/utils/const'

const state = {
  sidebar: {
    opened: getCookies(SideBarKey) ? !!+getCookies(SideBarKey) : true,
    show: true,
    logo: true,
    title: 'Vue Element Admin',
  },
}

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar.opened = !state.sidebar.opened

    setCookies(SideBarKey, +state.sidebar.opened)
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
