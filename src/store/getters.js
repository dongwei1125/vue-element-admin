const getters = {
  app: state => state.app,
  sidebar: state => state.app.sidebar,
  routes: state => state.permission.routes,
  roles: state => state.user.roles,
}

export default getters
