import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import tagsView from './modules/tags-view'
import errorLog from './modules/error-log'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    tagsView,
    errorLog,
  },
  getters,
})

export default store
