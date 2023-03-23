import Cookies from 'js-cookie'

export function getCookies(key) {
  return Cookies.get(key)
}

export function setCookies(key, value) {
  Cookies.set(key, value)
}
