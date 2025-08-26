import axios from 'axios'
import store from '@/store'

import { Message } from 'element-ui'

const SUCCESS_CODE = 0

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})

http.interceptors.request.use(
  config => {
    config.headers.Token = store.getters.token

    return config
  },
  error => {
    console.log(error)

    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    const data = response.data

    if (data.code !== SUCCESS_CODE) {
      Message({
        message: data.message || 'Error',
        type: 'error',
      })

      return Promise.reject(new Error(data.message || 'Error'))
    }

    return data
  },
  error => {
    console.log(error)

    Message({
      message: error.message || 'Error',
      type: 'error',
    })

    return Promise.reject(error)
  }
)

export default http
