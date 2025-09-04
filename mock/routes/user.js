const Mock = require('mockjs')

module.exports = [
  {
    url: '/api/user/logout',
    method: 'post',
    callback(request, response) {
      const token = Mock.Random.guid()

      response.success(token)
    }
  },
  {
    url: '/api/user/login',
    method: 'post',
    callback(request, response) {
      response.success()
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    callback(request, response) {
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
    }
  },
]
