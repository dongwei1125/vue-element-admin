import i18n from '@/i18n'

const $t = i18n.t.bind(i18n)

export function getSteps() {
  return [
    {
      element: '#hamburger',
      popover: {
        title: $t('guidePage.hamburger'),
        description: $t('guidePage.hamburgerDesc'),
        side: 'bottom',
      },
    },
    {
      element: '#breadcrumb',
      popover: {
        title: $t('guidePage.breadcrumb'),
        description: $t('guidePage.breadcrumbDesc'),
        side: 'bottom',
      },
    },
    {
      element: '#header-search',
      popover: {
        title: $t('guidePage.search'),
        description: $t('guidePage.searchDesc'),
        side: 'left',
      },
    },
    {
      element: '#full-screen',
      popover: {
        title: $t('guidePage.full'),
        description: $t('guidePage.fullDesc'),
        side: 'left',
      },
    },
    {
      element: '#element-size',
      popover: {
        title: $t('guidePage.size'),
        description: $t('guidePage.sizeDesc'),
        side: 'left',
      },
    },
    {
      element: '#tags-view',
      popover: {
        title: $t('guidePage.tagsView'),
        description: $t('guidePage.tagsViewDesc'),
        side: 'bottom',
      },
    },
  ]
}
