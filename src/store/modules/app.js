import { getCookies, setCookies } from '@/utils/cookies'

const SideBarKey = 'SidebarStatus'
const SizeKey = 'Size'

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
  pinyinSearch: true,
  size: getCookies(SizeKey) || 'medium',
  language: 'zh',
}

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false

    setCookies(SideBarKey, +state.sidebar.opened)
  },

  CLOSE_SIDEBAR(state, withoutAnimation) {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation

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

  FIXED_HEADER(state, boolean) {
    state.header.fixed = boolean
  },

  DISPLAY_TAGS_VIEW(state, boolean) {
    state.header.tagsView = boolean
  },

  UPDATE_DEVICE(state, device) {
    state.device = device
  },

  UPDATE_SIZE(state, size) {
    state.size = size

    setCookies(SizeKey, size)
  },

  USE_PINYIN_SEARCH(state, boolean) {
    state.pinyinSearch = boolean
  },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },

  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
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

  fixedHeader({ commit }, boolean) {
    commit('FIXED_HEADER', boolean)
  },

  displayTagsView({ commit }, boolean) {
    commit('DISPLAY_TAGS_VIEW', boolean)
  },

  updateDevice({ commit }, device) {
    commit('UPDATE_DEVICE', device)
  },

  updateSize({ commit }, size) {
    commit('UPDATE_SIZE', size)
  },

  usePinyinSearch({ commit }, boolean) {
    commit('USE_PINYIN_SEARCH', boolean)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
