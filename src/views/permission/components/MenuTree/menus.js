import i18n from '@/i18n'

const $t = i18n.t.bind(i18n)

export default function getMenus() {
  return [
    {
      key: 'dashboard',
      name: $t('route.dashboard'),
    },
    {
      key: 'document',
      name: $t('route.document'),
    },
    {
      key: 'guide',
      name: $t('route.guide'),
    },
    {
      key: 'permission',
      name: $t('route.permission'),
      children: [
        {
          key: 'pagePermission',
          name: $t('route.pagePermission'),
        },
        {
          key: 'directivePermission',
          name: $t('route.directivePermission'),
        },
        {
          key: 'rolePermission',
          name: $t('route.rolePermission'),
        },
      ],
    },
    {
      key: 'icons',
      name: $t('route.icons'),
    },
    {
      key: 'component',
      name: $t('route.component'),
      children: [
        {
          key: 'tinymce',
          name: $t('route.tinymce'),
        },
        {
          key: 'markdown',
          name: $t('route.markdown'),
        },
        {
          key: 'jsonEditor',
          name: $t('route.jsonEditor'),
        },
        {
          key: 'splitPane',
          name: $t('route.splitPane'),
        },
        {
          key: 'avatarUpload',
          name: $t('route.avatarUpload'),
        },
        {
          key: 'dropzone',
          name: $t('route.dropzone'),
        },
        {
          key: 'sticky',
          name: $t('route.sticky'),
        },
        {
          key: 'countTo',
          name: $t('route.countTo'),
        },
        {
          key: 'componentMixin',
          name: $t('route.componentMixin'),
        },
        {
          key: 'backToTop',
          name: $t('route.backToTop'),
        },
        {
          key: 'dragDialog',
          name: $t('route.dragDialog'),
        },
        {
          key: 'dragSelect',
          name: $t('route.dragSelect'),
        },
        {
          key: 'dndList',
          name: $t('route.dndList'),
        },
        {
          key: 'dragKanban',
          name: $t('route.dragKanban'),
        },
      ],
    },
    {
      key: 'chart',
      name: $t('route.chart'),
      children: [
        {
          key: 'keyboardChart',
          name: $t('route.keyboardChart'),
        },
        {
          key: 'lineChart',
          name: $t('route.lineChart'),
        },
        {
          key: 'mixChart',
          name: $t('route.mixChart'),
        },
      ],
    },
    {
      key: 'nested',
      name: $t('route.nested'),
      children: [
        {
          key: 'menu1',
          name: $t('route.menu1'),
          children: [
            {
              key: 'menu1-1',
              name: $t('route.menu1-1'),
            },
            {
              key: 'menu1-2',
              name: $t('route.menu1-2'),
              children: [
                {
                  key: 'menu1-2-1',
                  name: $t('route.menu1-2-1'),
                },
                {
                  key: 'menu1-2-2',
                  name: $t('route.menu1-2-2'),
                },
              ],
            },
            {
              key: 'menu1-3',
              name: $t('route.menu1-3'),
            },
          ],
        },
        {
          key: 'menu2',
          name: $t('route.menu2'),
        },
      ],
    },
    {
      key: 'table',
      name: $t('route.table'),
      children: [
        {
          key: 'dynamicTable',
          name: $t('route.dynamicTable'),
        },
        {
          key: 'dragTable',
          name: $t('route.dragTable'),
        },
        {
          key: 'inlineEditTable',
          name: $t('route.inlineEditTable'),
        },
        {
          key: 'complexTable',
          name: $t('route.complexTable'),
        },
      ],
    },
    {
      key: 'example',
      name: $t('route.example'),
      children: [
        {
          key: 'createArticle',
          name: $t('route.createArticle'),
        },
        {
          key: 'articleList',
          name: $t('route.articleList'),
        },
      ],
    },
    {
      key: 'tab',
      name: $t('route.tab'),
    },
    {
      key: 'error',
      name: $t('route.error'),
      children: [
        {
          key: 'error401',
          name: $t('route.error401'),
        },
        {
          key: 'error404',
          name: $t('route.error404'),
        },
      ],
    },
    {
      key: 'excel',
      name: $t('route.excel'),
      children: [
        {
          key: 'exportExcel',
          name: $t('route.exportExcel'),
        },
        {
          key: 'exportSelectedExcel',
          name: $t('route.exportSelectedExcel'),
        },
        {
          key: 'exportMergeHeaderExcel',
          name: $t('route.exportMergeHeaderExcel'),
        },
        {
          key: 'uploadExcel',
          name: $t('route.uploadExcel'),
        },
      ],
    },
    {
      key: 'zip',
      name: $t('route.zip'),
      children: [
        {
          key: 'exportZip',
          name: $t('route.exportZip'),
        },
      ],
    },
    {
      key: 'pdf',
      name: $t('route.pdf'),
    },
    {
      key: 'theme',
      name: $t('route.theme'),
    },
    {
      key: 'clipboard',
      name: $t('route.clipboard'),
    },
    {
      key: 'i18n',
      name: $t('route.i18n'),
    },
    {
      key: 'link',
      name: $t('route.link'),
    },
  ]
}
