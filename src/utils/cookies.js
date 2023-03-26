import Cookies from 'js-cookie'

/**
 * @param {String} key
 * @returns {String}
 */
export function getCookies(key) {
  return Cookies.get(key)
}

/**
 * @param {String} key
 * @param {String} value
 */
export function setCookies(key, value) {
  Cookies.set(key, value)
}

/**
 * @param {String} key
 * @returns {Boolean}
 */
export function removeCookies(key) {
  return Cookies.remove(key)
}
