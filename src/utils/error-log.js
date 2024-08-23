import Vue from 'vue'
import store from '@/store'

const errorHandler = (err, vm, info) => {
  Vue.nextTick(() => {
    const url = window.location.href

    store.dispatch('errorLog/addErrorLog', { err, vm, info, url })
    console.error(err, info)
  })
}

Vue.config.errorHandler = errorHandler
