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
      roles: ['admin', 'user'],
      alwaysShow: true,
    },
    children: [
      {
        name: 'PagePermission',
        path: 'page',
        component: () => import('@/views/permission/page'),
        meta: {
          title: 'route.pagePermission',
          icon: 'page',
          roles: ['admin'],
        },
      },
      {
        name: 'DirectivePermission',
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        meta: {
          title: 'route.directivePermission',
          icon: 'v',
        },
      },
      {
        name: 'RolePermission',
        path: 'role',
        component: () => import('@/views/permission/role'),
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
    path: '/icons',
    component: Layout,
    children: [
      {
        name: 'Icons',
        path: 'index',
        component: () => import('@/views/icons'),
        meta: {
          title: 'route.icons',
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
        component: () => import('@/views/component/tinymce.vue'),
        meta: {
          title: 'route.tinymce',
          icon: 'tinymce',
        },
      },
      {
        name: 'Markdown',
        path: 'markdown',
        component: () => import('@/views/component/markdown.vue'),
        meta: {
          title: 'route.markdown',
          icon: 'markdown',
        },
      },
      {
        name: 'JsonEditor',
        path: 'json-editor',
        component: () => import('@/views/component/json.vue'),
        meta: {
          title: 'route.jsonEditor',
          icon: 'json',
        },
      },
      {
        name: 'SplitPane',
        path: 'split-pane',
        component: () => import('@/views/component/split-pane.vue'),
        meta: {
          title: 'route.splitPane',
          icon: 'split-pane',
        },
      },
      {
        name: 'AvatarUpload',
        path: 'avatar-upload',
        component: () => import('@/views/component/avatar-upload.vue'),
        meta: {
          title: 'route.avatarUpload',
          icon: 'avatar-upload',
        },
      },
      {
        name: 'Dropzone',
        path: 'dropzone',
        component: () => import('@/views/component/dropzone.vue'),
        meta: {
          title: 'route.dropzone',
          icon: 'drag-upload',
        },
      },
      {
        name: 'Sticky',
        path: 'sticky',
        component: () => import('@/views/component/sticky.vue'),
        meta: {
          title: 'route.sticky',
          icon: 'sticky',
        },
      },
      {
        name: 'CountTo',
        path: 'count-to',
        component: () => import('@/views/component/count-to.vue'),
        meta: {
          title: 'route.countTo',
          icon: 'count-to',
        },
      },
      {
        name: 'ComponentMixin',
        path: 'mixin',
        component: () => import('@/views/component/component-mixin.vue'),
        meta: {
          title: 'route.componentMixin',
          icon: 'component-mixin',
        },
      },
      {
        name: 'BackToTop',
        path: 'back-to-top',
        component: () => import('@/views/component/back-to-top.vue'),
        meta: {
          title: 'route.backToTop',
          icon: 'back-to-top',
        },
      },
      {
        name: 'DragDialog',
        path: 'drag-dialog',
        component: () => import('@/views/component/drag-dialog.vue'),
        meta: {
          title: 'route.dragDialog',
          icon: 'drag-dialog',
        },
      },
      {
        name: 'DragSelect',
        path: 'drag-select',
        component: () => import('@/views/component/drag-select.vue'),
        meta: {
          title: 'route.dragSelect',
          icon: 'drag-select',
        },
      },
      {
        name: 'DndList',
        path: 'dnd-list',
        component: () => import('@/views/component/dnd-list.vue'),
        meta: {
          title: 'route.dndList',
          icon: 'dnd-list',
        },
      },
      {
        name: 'DragKanban',
        path: 'drag-kanban',
        component: () => import('@/views/component/drag-kanban.vue'),
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
        component: () => import('@/views/chart/keyboard.vue'),
        meta: {
          title: 'route.keyboardChart',
          icon: 'keyboard-chart',
        },
      },
      {
        name: 'LineChart',
        path: 'line',
        component: () => import('@/views/chart/line.vue'),
        meta: {
          title: 'route.lineChart',
          icon: 'line-chart',
        },
      },
      {
        name: 'MixChart',
        path: 'mix',
        component: () => import('@/views/chart/mix.vue'),
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
        component: () => import('@/views/nested/menu1'),
        redirect: '/nested/menu1/menu1-1',
        meta: {
          title: 'route.menu1',
          icon: 'menu',
        },
        children: [
          {
            name: 'Menu1-1',
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            meta: {
              title: 'route.menu1-1',
              icon: 'menu',
            },
          },
          {
            name: 'Menu1-2',
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: {
              title: 'route.menu1-2',
              icon: 'menu',
            },
            children: [
              {
                name: 'Menu1-2-1',
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                meta: {
                  title: 'route.menu1-2-1',
                  icon: 'menu',
                },
              },
              {
                name: 'Menu1-2-2',
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2//menu1-2-2'),
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
            component: () => import('@/views/nested/menu1/menu1-3'),
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
        component: () => import('@/views/nested/menu2'),
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
        component: () => import('@/views/table/dynamic-table'),
        meta: {
          title: 'route.dynamicTable',
          icon: 'dynamic-table',
        },
      },
      {
        name: 'DragTable',
        path: 'drag',
        component: () => import('@/views/table/drag-table'),
        meta: {
          title: 'route.dragTable',
          icon: 'drag-table',
        },
      },
      {
        name: 'InlineEditTable',
        path: 'inline-edit',
        component: () => import('@/views/table/inline-edit-table'),
        meta: {
          title: 'route.inlineEditTable',
          icon: 'inline-edit-table',
        },
      },
      {
        name: 'ComplexTable',
        path: 'complex',
        component: () => import('@/views/table/complex-table'),
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
        component: () => import('@/views/example/create'),
        meta: {
          title: 'route.createArticle',
          icon: 'edit',
        },
      },
      {
        name: 'EditArticle',
        path: 'edit/:id',
        component: () => import('@/views/example/edit'),
        meta: {
          title: 'route.editArticle',
          hidden: true,
        },
      },
      {
        name: 'ArticleList',
        path: 'list',
        component: () => import('@/views/example/list'),
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
        component: () => import('@/views/tab'),
        meta: {
          title: 'route.tab',
          icon: 'tab',
        },
      },
    ],
  },

  // 错误页面
  {
    name: 'Error',
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: 'route.error',
      icon: 'error',
    },
    children: [
      {
        name: 'Error401',
        path: '401',
        component: () => import('@/views/error/401'),
        meta: {
          title: 'route.error401',
          icon: '401',
        },
      },
      {
        name: 'Error404',
        path: '404',
        component: () => import('@/views/error/404'),
        meta: {
          title: 'route.error404',
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
        component: () => import('@/views/error-log'),
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
        component: () => import('@/views/excel/export-excel.vue'),
        meta: {
          title: 'route.exportExcel',
          icon: 'export-excel',
        },
      },
      {
        name: 'ExportSelectedExcel',
        path: 'export-selected',
        component: () => import('@/views/excel/export-selected-excel.vue'),
        meta: {
          title: 'route.exportSelectedExcel',
          icon: 'export-excel',
        },
      },
      {
        name: 'ExportMergeHeaderExcel',
        path: 'export-merge-header',
        component: () => import('@/views/excel/export-merge-header-excel.vue'),
        meta: {
          title: 'route.exportMergeHeaderExcel',
          icon: 'export-excel',
        },
      },
      {
        name: 'UploadExcel',
        path: 'upload',
        component: () => import('@/views/excel/upload-excel'),
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
        component: () => import('@/views/zip/export-zip'),
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
        component: () => import('@/views/pdf'),
        meta: {
          title: 'route.pdf',
          icon: 'pdf',
        },
      },
    ],
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    meta: {
      hidden: true,
    },
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

  {
    path: '*',
    redirect: '/404',
    meta: {
      hidden: true,
    },
  },
]
