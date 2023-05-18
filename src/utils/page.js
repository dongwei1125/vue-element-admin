import i18n from '@/i18n'

/**
 * @param {String} pageTitle
 * @returns {String}
 */
export function getPageTitle(pageTitle) {
  const title = 'Vue Element Admin'

  if (i18n.te(pageTitle)) {
    return `${i18n.t(pageTitle)} - ${title}`
  } else {
    return `${title}`
  }
}
