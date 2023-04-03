import p from 'path'

/**
 * @param {String} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:|sms:)/.test(path)
}

/**
 * @param {String} basePath
 * @param {String} path
 * @returns {String}
 */
export function resolvePath(basePath, path) {
  if (!basePath) {
    return path
  }

  if (isExternal(path)) {
    return path
  }

  return p.resolve(basePath, path)
}
