const express = require('express')
const Mock = require('mockjs')

const router = express.Router()

router.get('/list', (_, response) => {
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

  response.success({
    list,
    pageNo: 1,
    pageSize: 10,
    total: 50,
  })
})

module.exports = router
