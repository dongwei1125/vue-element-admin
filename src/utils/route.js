/**
 * @param {Object} route
 * @returns {Boolean}
 */
export function isRootRoute(route) {
  const [firstRouteRecord] = route.matched

  return firstRouteRecord.path === ''
}
