import http from './httpInstance'

const list = params => http.get('/api/article/list', { params })

export { list }
