import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './icons'
import './permission'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'

import ElementUI from 'element-ui'
import './styles/element-variables.scss'

Vue.use(ElementUI, {
  size: store.getters.app.size,
  i18n: (key, value) => i18n.t(key, value),
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
