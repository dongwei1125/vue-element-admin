import * as pathToRegexp from 'path-to-regexp'
import pathBrowserify from 'path-browserify'

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
  return pathBrowserify.resolve(basePath, path)
}

/**
 * @param {String} path
 * @param {Object} options
 * @returns {String}
 */
export function pathCompile(path, options) {
  return pathToRegexp.compile(path)(options)
}
