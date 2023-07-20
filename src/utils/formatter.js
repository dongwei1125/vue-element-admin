/**
 * @param {Number} value
 * @returns {String}
 */
export function addThousandSeparator(value) {
  return (+value || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * @param {String} text
 * @returns {String}
 */
export function substring(text, ...rest) {
  return text.substring(...rest)
}
