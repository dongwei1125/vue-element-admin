const express = require('express')

const router = express.Router()

router.get('/info', (_, responce) => {
  responce.json({
    code: 200,
    message: '',
    data: null,
  })
})

module.exports = router
