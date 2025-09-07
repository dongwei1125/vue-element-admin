const Mock = require('mockjs')
const qs = require('qs')

const routes = require('./routes')

module.exports = () => {
  routes.forEach(route => {
    const { url, method, response } = route

    Mock.mock(new RegExp(url), method, options => {
      const { type, body, url } = options
      const config = {
        method: type,
        body: JSON.parse(body) || {},
        query: qs.parse(url.split('?')[1])
      }

      return response(config)
    })
  })
}