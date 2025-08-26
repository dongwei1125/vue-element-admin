const Mock = require('mockjs')
const express = require('express')

const router = express.Router()

router.post('/login', (_, response) => {
  const token = Mock.Random.guid()

  response.success(token)
})

router.post('/logout', (_, response) => {
  response.success()
})

module.exports = router
