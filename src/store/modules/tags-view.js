const state = {
  views: [],
}

const mutations = {
  ADD_VIEW(state, view) {
    if (state.views.some(v => v.path === view.path)) return

    state.views.push(view)
  },

  REMOVE_VIEW(state, view) {
    const i = state.views.findIndex(v => v.path === view.path)

    state.views.splice(i, 1)
  },

  REMOVE_OTHER_VIEWS(state, view) {
    state.views = state.views.filter(v => v.meta?.affix || v.path === view.path)
  },

  REMOVE_ALL_VIEWS(state) {
    state.views = state.views.filter(v => v.meta?.affix)
  },
}

const actions = {
  addView({ commit }, view) {
    commit('ADD_VIEW', view)
  },

  removeView({ commit }, view) {
    commit('REMOVE_VIEW', view)
  },

  removeOtherViews({ commit }, view) {
    commit('REMOVE_OTHER_VIEWS', view)
  },

  removeAllViews({ commit }) {
    commit('REMOVE_ALL_VIEWS')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
