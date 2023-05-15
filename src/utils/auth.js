import { getCookies, setCookies, removeCookies } from './cookies'

const TokenKey = 'token'

/**
 * @returns {String}
 */
export function getToken() {
  return getCookies(TokenKey)
}

/**
 * @param {String} token
 */
export function setToken(token) {
  setCookies(TokenKey, token)
}

/**
 * @returns {Boolean}
 */
export function removeToken() {
  return removeCookies(TokenKey)
}
