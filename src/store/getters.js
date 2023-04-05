const getters = {
  app: state => state.app,
  sidebar: state => state.app.sidebar,
  header: state => state.app.header,
  routes: state => state.permission.routes,
  roles: state => state.user.roles,
}

export default getters
