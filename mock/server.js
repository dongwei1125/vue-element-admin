const mock = require('./app')

module.exports = (middlewares, devServer) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined')
  }

  mock(devServer.app)

  return middlewares
}
