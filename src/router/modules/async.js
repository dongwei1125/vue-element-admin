import Layout from '@/layout'

export default [
  // 权限页
  {
    name: 'Permission',
    path: '/permission',
    redirect: '/permission/directive',
    component: Layout,
    meta: {
      title: 'route.permission',
      icon: 'lock',
      roles: ['admin', 'editor'],
      alwaysShow: true,
    },
    children: [
      {
        name: 'PagePermission',
        path: 'page',
        meta: {
          title: 'route.pagePermission',
          icon: 'page',
          roles: ['admin'],
        },
      },
      {
        name: 'DirectivePermission',
        path: 'directive',
        meta: {
          title: 'route.directivePermission',
          icon: 'v',
        },
      },
      {
        name: 'RolePermission',
        path: 'role',
        meta: {
          title: 'route.rolePermission',
          icon: 'role',
          roles: ['admin'],
        },
      },
    ],
  },

  // 图标
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        name: 'Icon',
        path: 'index',
        meta: {
          title: 'route.icon',
          icon: 'icon',
        },
      },
    ],
  },

  // 组件
  {
    name: 'Component',
    path: '/component',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: 'route.component',
      icon: 'component',
    },
    children: [
      {
        name: 'Tinymce',
        path: 'tinymce',
        meta: {
          title: 'route.tinymce',
          icon: 'tinymce',
        },
      },
      {
        name: 'Markdown',
        path: 'markdown',
        meta: {
          title: 'route.markdown',
          icon: 'markdown',
        },
      },
      {
        name: 'JsonEditor',
        path: 'json-editor',
        meta: {
          title: 'route.jsonEditor',
          icon: 'json',
        },
      },
      {
        name: 'SplitPane',
        path: 'split-pane',
        meta: {
          title: 'route.splitPane',
          icon: 'split-pane',
        },
      },
      {
        name: 'AvatarUpload',
        path: 'avatar-upload',
        meta: {
          title: 'route.avatarUpload',
          icon: 'avatar-upload',
        },
      },
      {
        name: 'Dropzone',
        path: 'dropzone',
        meta: {
          title: 'route.dropzone',
          icon: 'drag-upload',
        },
      },
      {
        name: 'Sticky',
        path: 'sticky',
        meta: {
          title: 'route.sticky',
          icon: 'sticky',
        },
      },
      {
        name: 'CountTo',
        path: 'count-to',
        meta: {
          title: 'route.countTo',
          icon: 'count-to',
        },
      },
      {
        name: 'ComponentMixin',
        path: 'mixin',
        meta: {
          title: 'route.componentMixin',
          icon: 'component-mixin',
        },
      },
      {
        name: 'BackToTop',
        path: 'back-to-top',
        meta: {
          title: 'route.backToTop',
          icon: 'back-to-top',
        },
      },
      {
        name: 'DragDialog',
        path: 'drag-dialog',
        meta: {
          title: 'route.dragDialog',
          icon: 'drag-dialog',
        },
      },
      {
        name: 'DragSelect',
        path: 'drag-select',
        meta: {
          title: 'route.dragSelect',
          icon: 'drag-select',
        },
      },
      {
        name: 'DndList',
        path: 'dnd-list',
        meta: {
          title: 'route.dndList',
          icon: 'dnd-list',
        },
      },
      {
        name: 'DragKanban',
        path: 'drag-kanban',
        meta: {
          title: 'route.dragKanban',
          icon: 'drag-kanban',
        },
      },
    ],
  },

  // 图表
  {
    name: 'Chart',
    path: '/chart',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: 'route.chart',
      icon: 'chart',
    },
    children: [
      {
        name: 'KeyboardChart',
        path: 'keyboard',
        meta: {
          title: 'route.keyboardChart',
          icon: 'keyboard-chart',
        },
      },
      {
        name: 'LineChart',
        path: 'line',
        meta: {
          title: 'route.lineChart',
          icon: 'line-chart',
        },
      },
      {
        name: 'MixChart',
        path: 'mix',
        meta: {
          title: 'route.mixChart',
          icon: 'mix-chart',
        },
      },
    ],
  },

  // 路由嵌套
  {
    name: 'Nested',
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    meta: {
      title: 'route.nested',
      icon: 'nested',
    },
    children: [
      {
        name: 'Menu1',
        path: 'menu1',
        redirect: '/nested/menu1/menu1-1',
        meta: {
          title: 'route.menu1',
          icon: 'menu',
        },
        children: [
          {
            name: 'Menu1-1',
            path: 'menu1-1',
            meta: {
              title: 'route.menu1-1',
              icon: 'menu',
            },
          },
          {
            name: 'Menu1-2',
            path: 'menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: {
              title: 'route.menu1-2',
              icon: 'menu',
            },
            children: [
              {
                name: 'Menu1-2-1',
                path: 'menu1-2-1',
                meta: {
                  title: 'route.menu1-2-1',
                  icon: 'menu',
                },
              },
              {
                name: 'Menu1-2-2',
                path: 'menu1-2-2',
                meta: {
                  title: 'route.menu1-2-2',
                  icon: 'menu',
                },
              },
            ],
          },
          {
            name: 'Menu1-3',
            path: 'menu1-3',
            meta: {
              title: 'route.menu1-3',
              icon: 'menu',
            },
          },
        ],
      },
      {
        name: 'Menu2',
        path: 'menu2',
        meta: {
          title: 'route.menu2',
          icon: 'menu',
        },
      },
    ],
  },

  // Table
  {
    name: 'Table',
    path: '/table',
    component: Layout,
    redirect: '/table/complex',
    meta: {
      title: 'route.table',
      icon: 'table',
    },
    children: [
      {
        name: 'DynamicTable',
        path: 'dynamic',
        meta: {
          title: 'route.dynamicTable',
          icon: 'dynamic-table',
        },
      },
      {
        name: 'DragTable',
        path: 'drag',
        meta: {
          title: 'route.dragTable',
          icon: 'drag-table',
        },
      },
      {
        name: 'InlineEditTable',
        path: 'inline-edit',
        meta: {
          title: 'route.inlineEditTable',
          icon: 'inline-edit-table',
        },
      },
      {
        name: 'ComplexTable',
        path: 'complex',
        meta: {
          title: 'route.complexTable',
          icon: 'complex-table',
        },
      },
    ],
  },

  // 综合实例
  {
    name: 'Example',
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    meta: {
      title: 'route.example',
      icon: 'el-icon-s-help',
    },
    children: [
      {
        name: 'CreateArticle',
        path: 'create',
        meta: {
          title: 'route.createArticle',
          icon: 'edit',
        },
      },
      {
        name: 'ArticleList',
        path: 'list',
        meta: {
          title: 'route.articleList',
          icon: 'list',
        },
      },
    ],
  },

  // Tab
  {
    path: '/tab',
    component: Layout,
    children: [
      {
        name: 'Tab',
        path: 'index',
        meta: {
          title: 'route.tab',
          icon: 'tab',
        },
      },
    ],
  },

  // 错误页面
  {
    name: 'ErrorPage',
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: 'route.errorPage',
      icon: 'error',
    },
    children: [
      {
        name: 'Page401',
        path: '401',
        meta: {
          title: 'route.page401',
          icon: '401',
        },
      },
      {
        name: 'Page404',
        path: '404',
        meta: {
          title: 'route.page404',
          icon: '404',
        },
      },
    ],
  },

  // 错误日志
  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        name: 'ErrorLog',
        path: 'index',
        meta: {
          title: 'route.errorLog',
          icon: 'bug',
        },
      },
    ],
  },

  // Excel
  {
    name: 'Excel',
    path: '/excel',
    component: Layout,
    redirect: '/excel/export',
    meta: {
      title: 'route.excel',
      icon: 'excel',
    },
    children: [
      {
        name: 'ExportExcel',
        path: 'export',
        meta: {
          title: 'route.exportExcel',
          icon: 'export-excel',
        },
      },
      {
        name: 'ExportSelectedExcel',
        path: 'export-selected',
        meta: {
          title: 'route.exportSelectedExcel',
          icon: 'export-excel',
        },
      },
      {
        name: 'ExportMergeHeaderExcel',
        path: 'export-merge-header',
        meta: {
          title: 'route.exportMergeHeaderExcel',
          icon: 'export-excel',
        },
      },
      {
        name: 'UploadExcel',
        path: 'upload',
        meta: {
          title: 'route.uploadExcel',
          icon: 'upload-excel',
        },
      },
    ],
  },

  // Zip
  {
    name: 'Zip',
    path: '/zip',
    component: Layout,
    redirect: '/zip/export',
    meta: {
      title: 'route.zip',
      icon: 'zip',
      alwaysShow: true,
    },
    children: [
      {
        name: 'ExportZip',
        path: 'export',
        meta: {
          title: 'route.exportZip',
          icon: 'export-zip',
        },
      },
    ],
  },

  // PDF
  {
    path: '/pdf',
    component: Layout,
    children: [
      {
        name: 'Pdf',
        path: 'index',
        meta: {
          title: 'route.pdf',
          icon: 'pdf',
        },
      },
    ],
  },

  // 主题
  {
    path: '/theme',
    component: Layout,
    children: [
      {
        name: 'Theme',
        path: 'index',
        component: () => import('@/views/theme'),
        meta: {
          title: 'route.theme',
          icon: 'theme',
        },
      },
    ],
  },

  // 剪切板
  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        name: 'Clipboard',
        path: 'index',
        component: () => import('@/views/clipboard'),
        meta: {
          title: 'route.clipboard',
          icon: 'clipboard',
        },
      },
    ],
  },

  // 国际化
  {
    path: '/i18n',
    component: Layout,
    children: [
      {
        name: 'I18n',
        path: 'index',
        component: () => import('@/views/i18n'),
        meta: {
          title: 'route.i18n',
          icon: 'i18n',
        },
      },
    ],
  },

  // 外链
  {
    path: 'https://github.com/dongwei1125/vue-element-admin',
    meta: {
      title: 'route.link',
      icon: 'link',
    },
  },
]
