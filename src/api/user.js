import http from './httpInstance'

const login = data => http.post('/vue-element-admin/user/login', data)

const getInfo = params => http.get('/vue-element-admin/user/info', { params })

const logout = data => http.post('/vue-element-admin/user/logout', data)

export { login, getInfo, logout }
