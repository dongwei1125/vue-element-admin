const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  routes: state => state.permission.routes,
  app: state => state.app,
  sidebar: state => state.app.sidebar,
  header: state => state.app.header,
}

export default getters
