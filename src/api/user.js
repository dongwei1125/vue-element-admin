import http from './httpInstance'

const login = data => http.post('/api/user/login', data)

const getInfo = params => http.get('/vue-element-admin/user/info', { params })

const logout = data => http.post('/api/user/logout', data)

export { login, getInfo, logout }
