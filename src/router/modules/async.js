import Layout from '@/layout'

export default [
  // 权限页
  {
    name: 'Permission',
    path: '/permission',
    component: Layout,
    meta: {
      title: 'route.permission',
      icon: 'lock',
    },
    children: [
      {
        name: 'PagePermission',
        path: 'page',
        meta: {
          title: 'route.pagePermission',
          icon: 'page',
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
        },
      },
      {
        name: 'Markdown',
        path: 'markdown',
        meta: {
          title: 'route.markdown',
        },
      },
      {
        name: 'JsonEditor',
        path: 'json-editor',
        meta: {
          title: 'route.jsonEditor',
        },
      },
      {
        name: 'SplitPane',
        path: 'split-pane',
        meta: {
          title: 'route.splitPane',
        },
      },
      {
        name: 'AvatarUpload',
        path: 'avatar-upload',
        meta: {
          title: 'route.avatarUpload',
        },
      },
      {
        name: 'Dropzone',
        path: 'dropzone',
        meta: {
          title: 'route.dropzone',
        },
      },
      {
        name: 'Sticky',
        path: 'sticky',
        meta: {
          title: 'route.sticky',
        },
      },
      {
        name: 'CountTo',
        path: 'count-to',
        meta: {
          title: 'route.countTo',
        },
      },
      {
        name: 'ComponentMixin',
        path: 'mixin',
        meta: {
          title: 'route.componentMixin',
        },
      },
      {
        name: 'BackToTop',
        path: 'back-to-top',
        meta: {
          title: 'route.backToTop',
        },
      },
      {
        name: 'DragDialog',
        path: 'drag-dialog',
        meta: {
          title: 'route.dragDialog',
        },
      },
      {
        name: 'DragSelect',
        path: 'drag-select',
        meta: {
          title: 'route.dragSelect',
        },
      },
      {
        name: 'DndList',
        path: 'dnd-list',
        meta: {
          title: 'route.dndList',
        },
      },
      {
        name: 'DragKanban',
        path: 'drag-kanban',
        meta: {
          title: 'route.dragKanban',
        },
      },
    ],
  },

  // 图表
  {
    name: 'Chart',
    path: '/chart',
    component: Layout,
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
        },
      },
      {
        name: 'LineChart',
        path: 'line',
        meta: {
          title: 'route.lineChart',
        },
      },
      {
        name: 'MixChart',
        path: 'mix',
        meta: {
          title: 'route.mixChart',
        },
      },
    ],
  },

  // 路由嵌套
  {
    name: 'Nested',
    path: '/nested',
    component: Layout,
    meta: {
      title: 'route.nested',
      icon: 'nested',
    },
    children: [
      {
        name: 'Menu1',
        path: 'menu1',
        meta: {
          title: 'route.menu1',
        },
        children: [
          {
            name: 'Menu1-1',
            path: 'menu1-1',
            meta: {
              title: 'route.menu1-1',
            },
          },
          {
            name: 'Menu1-2',
            path: 'menu1-2',
            meta: {
              title: 'route.menu1-2',
            },
            children: [
              {
                name: 'Menu1-2-1',
                path: 'menu1-2-1',
                meta: {
                  title: 'route.menu1-2-1',
                },
              },
              {
                name: 'Menu1-2-2',
                path: 'menu1-2-2',
                meta: {
                  title: 'route.menu1-2-2',
                },
              },
            ],
          },
          {
            name: 'Menu1-3',
            path: 'menu1-3',
            meta: {
              title: 'route.menu1-3',
            },
          },
        ],
      },
      {
        name: 'Menu2',
        path: 'menu2',
        meta: {
          title: 'route.menu2',
        },
      },
    ],
  },

  // Table
  {
    name: 'Table',
    path: '/table',
    component: Layout,
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
        },
      },
      {
        name: 'DragTable',
        path: 'drag',
        meta: {
          title: 'route.dragTable',
        },
      },
      {
        name: 'InlineEditTable',
        path: 'inline-edit',
        meta: {
          title: 'route.inlineEditTable',
        },
      },
      {
        name: 'ComplexTable',
        path: 'complex',
        meta: {
          title: 'route.complexTable',
        },
      },
    ],
  },

  // 综合实例
  {
    name: 'Example',
    path: '/example',
    component: Layout,
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
    meta: {
      title: 'route.errorPage',
      icon: '404',
    },
    children: [
      {
        name: 'Page401',
        path: '401',
        meta: {
          title: 'route.page401',
        },
      },
      {
        name: 'Page404',
        path: '404',
        meta: {
          title: 'route.page404',
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
        },
      },
      {
        name: 'ExportSelectedExcel',
        path: 'export-selected',
        meta: {
          title: 'route.exportSelectedExcel',
        },
      },
      {
        name: 'ExportMergeHeaderExcel',
        path: 'export-merge-header',
        meta: {
          title: 'route.exportMergeHeaderExcel',
        },
      },
      {
        name: 'UploadExcel',
        path: 'upload',
        meta: {
          title: 'route.uploadExcel',
        },
      },
    ],
  },

  // Zip
  {
    name: 'Zip',
    path: '/zip',
    component: Layout,
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
