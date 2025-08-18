const user = require('./user')
const article = require('./article')

function registerRoutes(app) {
  app.use('/api/user', user)
  app.use('/api/article', article)
}

module.exports = {
  registerRoutes,
}
