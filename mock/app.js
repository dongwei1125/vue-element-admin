const chokidar = require('chokidar')
const { join } = require('path')
const { registerRoutes } = require('./routes')

const dir = join(process.cwd(), 'mock')

function unregisterRoutes(app) { }

module.exports = app => {
  registerRoutes(app)

  chokidar
    .watch(dir, {
      ignored: /server/,
    })
    .on('all', (event, path) => {
      unregisterRoutes(app)
      registerRoutes(app)
    })
}
