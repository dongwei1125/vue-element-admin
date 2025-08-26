function responseWrapper(request, response, next) {
  response.success = function (data = null, msg = 'success') {
    this.status(200).json({ code: 0, msg, data })
  }

  response.error = function (data = null, msg = 'error') {
    this.status(200).json({ code: -1, msg, data })
  }

  next()
}

module.exports = responseWrapper
