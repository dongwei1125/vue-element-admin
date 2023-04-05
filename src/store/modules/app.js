import { getCookies, setCookies } from '@/utils/cookies'

const SideBarKey = 'SidebarStatus'

const state = {
  sidebar: {
    opened: getCookies(SideBarKey) ? !!+getCookies(SideBarKey) : true,
    show: true,
    logo: true,
    withoutAnimation: false,
    title: 'Vue Element Admin',
  },
  header: {
    show: true,
    fixed: false,
    tagsView: true,
  },
  device: 'desktop',
}

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false

    setCookies(SideBarKey, +state.sidebar.opened)
  },

  CLOSE_SIDEBAR(state) {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = true

    setCookies(SideBarKey, +state.sidebar.opened)
  },

  DISPLAY_SIDEBAR(state, boolean) {
    state.sidebar.show = boolean
    state.sidebar.withoutAnimation = true
  },

  DISPLAY_SIDEBAR_LOGO(state, boolean) {
    state.sidebar.logo = boolean
  },

  DISPLAY_HEADER(state, boolean) {
    state.header.show = boolean
  },

  UPDATE_DEVICE(state, device) {
    state.device = device
  },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },

  closeSideBar({ commit }) {
    commit('CLOSE_SIDEBAR')
  },

  displaySideBar({ commit }, boolean) {
    commit('DISPLAY_SIDEBAR', boolean)
  },

  displaySideBarLogo({ commit }, boolean) {
    commit('DISPLAY_SIDEBAR_LOGO', boolean)
  },

  displayHeader({ commit }, boolean) {
    commit('DISPLAY_HEADER', boolean)
  },

  updateDevice({ commit }, device) {
    commit('UPDATE_DEVICE', device)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
