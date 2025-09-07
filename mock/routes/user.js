const Mock = require('mockjs')

module.exports = [
  {
    url: '/api/user/login',
    method: 'post',
    response(config) {
      return {
        code: 0,
        msg: 'success',
        data: Mock.Random.guid()
      }
    }
  },
  {
    url: '/api/user/logout',
    method: 'post',
    response(config) {
      return {
        code: 0,
        msg: 'success',
        data: null
      }
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    response(config) {
      return {
        code: 0,
        msg: 'success',
        data: {
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
        }
      }
    }
  },
]
