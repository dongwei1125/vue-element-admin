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

router.get('/info', (_, response) => {
  response.success({
    roles: ['admin'],
    name: 'admin',
    education: 'JS in Computer Science from the University of Technology',
    skills: [
      {
        name: 'Vue',
        progress: 70,
      },
      {
        name: 'JavaScript',
        progress: 18,
      },
      {
        name: 'Css',
        progress: 12,
      },
      {
        name: 'ESLint',
        progress: 100,
      },
    ],
  })
})

module.exports = router
