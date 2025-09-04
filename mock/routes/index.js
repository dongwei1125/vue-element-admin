const user = require('./user')
const article = require('./article')

const routes = [
  ...user,
  ...article,
]

module.exports = routes