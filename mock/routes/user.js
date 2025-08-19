const express = require('express')

const router = express.Router()

router.post('/login', (_, response) => {
  response.success(+new Date())
})

module.exports = router
