import Layout from '@/layout'

export default [
  {
    name: 'Example',
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    meta: {
      title: 'route.example',
      icon: 'el-icon-s-help',
    },
    children: [
      {
        name: 'Table',
        path: 'table',
        component: () => import('@/views/example/table.vue'),
        meta: {
          title: 'route.table',
          icon: 'el-icon-notebook-2',
        },
      },
      {
        name: 'Tree',
        path: 'tree',
        meta: {
          title: 'route.tree',
          icon: 'el-icon-finished',
        },
      },
    ],
  },
  {
    name: 'Form',
    path: '/form',
    meta: {
      title: 'route.form',
      icon: 'el-icon-document-copy',
    },
  },
  {
    name: 'Nested',
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    meta: {
      title: 'route.nested',
      icon: 'el-icon-menu',
    },
    children: [
      {
        name: 'Menu1',
        path: 'menu1',
        redirect: '/nested/menu1/menu1-1',
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
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
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
              affix: true,
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
  {
    path: 'http://www.baidu.com',
    meta: {
      title: 'route.link',
      icon: 'el-icon-link',
    },
  },
]
