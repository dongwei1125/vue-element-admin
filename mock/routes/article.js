const Mock = require('mockjs')

module.exports = [
  {
    url: '/api/article/list',
    method: 'get',
    response(config) {
      const { list } = Mock.mock({
        ['list|10']: [
          {
            id: '@id',
            index: '@increment',
            datetime: '@datetime("yyyy/MM/dd HH:mm")',
            author: '@first',
            title: '@title(5, 15)',
            importance: '@integer(1, 3)',
            'status|1': ['published', 'draft'],
          },
        ],
      })

      return {
        code: 0,
        msg: 'success',
        data: {
          list,
          pageNo: 1,
          pageSize: 10,
          total: 50,
        }
      }
    }
  }
]
