import { getCookies, setCookies, removeCookies } from './cookies'

const TokenKey = 'Token'

/**
 * @returns {String}
 */
export function getToken() {
  return getCookies(TokenKey)
}

/**
 * @param {String} value
 */
export function setToken(value) {
  setCookies(TokenKey, value)
}

/**
 * @returns {Boolean}
 */
export function removeToken() {
  return removeCookies(TokenKey)
}
