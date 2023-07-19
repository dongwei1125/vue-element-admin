import i18n from '@/i18n'

const $t = i18n.t.bind(i18n)
const $te = i18n.te.bind(i18n)

/**
 * @param {String} pageTitle
 * @returns {String}
 */
export function getPageTitle(pageTitle) {
  const title = 'Vue Element Admin'

  if ($te(pageTitle)) {
    return `${$t(pageTitle)} - ${title}`
  } else {
    return `${title}`
  }
}
