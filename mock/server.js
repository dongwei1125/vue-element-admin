module.exports = (middlewares, devServer) => {
  devServer.app.get('/api/user/login', (request, response) => {
    response.json({
      xxx: 'xxx',
    })
  })

  return middlewares
}
