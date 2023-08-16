import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 */
export function hasPermission(value) {
  if (!Array.isArray(value)) {
    return false
  }

  if (!value.length) {
    return true
  }

  const roles = store.getters.roles
  const hasPermission = roles.some(role => value.includes(role))

  return hasPermission
}
