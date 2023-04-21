import Layout from '@/layout'

export default [
  {
    name: 'Example',
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    meta: {
      title: '例子',
      icon: 'el-icon-s-help',
    },
    children: [
      {
        name: 'Table',
        path: 'table',
        component: () => import('@/views/example/table.vue'),
        meta: {
          title: '表格',
          icon: 'el-icon-notebook-2',
        },
      },
      {
        name: 'Tree',
        path: 'tree',
        meta: {
          title: '树',
          icon: 'el-icon-finished',
        },
      },
    ],
  },
  {
    name: 'Form',
    path: '/form',
    meta: {
      title: '表单',
      icon: 'el-icon-document-copy',
    },
  },
  {
    name: 'Nested',
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    meta: {
      title: '路由嵌套',
      icon: 'el-icon-menu',
    },
    children: [
      {
        name: 'Menu1',
        path: 'menu1',
        redirect: '/nested/menu1/menu1-1',
        meta: {
          title: '菜单 1',
        },
        children: [
          {
            name: 'Menu1-1',
            path: 'menu1-1',
            meta: {
              title: '菜单 1-1',
            },
          },
          {
            name: 'Menu1-2',
            path: 'menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: {
              title: '菜单 1-2',
            },
            children: [
              {
                name: 'Menu1-2-1',
                path: 'menu1-2-1',
                meta: {
                  title: '菜单 1-2-1',
                },
              },
              {
                name: 'Menu1-2-2',
                path: 'menu1-2-2',
                meta: {
                  title: '菜单 1-2-2',
                },
              },
            ],
          },
          {
            name: 'Menu1-3',
            path: 'menu1-3',
            meta: {
              title: '菜单 1-3',
            },
          },
        ],
      },
      {
        name: 'Menu2',
        path: 'menu2',
        meta: {
          title: '菜单 2',
        },
      },
    ],
  },
  {
    path: 'http://www.baidu.com',
    meta: {
      title: '外链',
      icon: 'el-icon-link',
    },
  },
]
