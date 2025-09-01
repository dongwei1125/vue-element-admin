const chokidar = require('chokidar')
const { join } = require('path')

const wrapper = require('./wrapper')

const dir = join(process.cwd(), 'mock/routes')

function registerRoutes(app) {
  const user = require('./routes/user')
  const article = require('./routes/article')

  app.use('/api/user', user)
  app.use('/api/article', article)
}

function unregisterRoutes(app) {
  // 清除模块缓存
  Object.keys(require.cache).forEach(i => {
    if (i.includes(dir)) {
      delete require.cache[require.resolve(i)]
    }
  })

  // 清除路由栈
  app._router.stack = app._router.stack.filter(layer => layer.name !== 'router')
}

function setupHotReload(app) {
  chokidar.watch(dir).on('all', () => {
    unregisterRoutes(app)
    registerRoutes(app)
  })
}

module.exports = app => {
  app.use(wrapper)

  registerRoutes(app)
  setupHotReload(app)
}
