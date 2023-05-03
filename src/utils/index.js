/**
 * @param {String} pageTitle
 * @returns {String}
 */
export function getPageTitle(pageTitle) {
  const title = 'Vue Element Admin'

  if (pageTitle) {
    return `${pageTitle} - ${title}`
  } else {
    return `${title}`
  }
}
