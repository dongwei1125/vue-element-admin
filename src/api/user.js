import http from './httpInstance'

const login = data => http.post('/api/user/login', data)

const info = params => http.get('/api/user/info', { params })

const logout = data => http.post('/api/user/logout', data)

export { login, info, logout }
