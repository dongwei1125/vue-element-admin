import Layout from '@/layout'

export default [
  // 刷新中间页
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect'),
      },
    ],
  },

  // 登录
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: {
      hidden: true,
    },
  },

  // 首页
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          title: 'route.dashboard',
          icon: 'dashboard',
          affix: true,
        },
      },
    ],
  },

  // 文档
  {
    path: '/document',
    component: Layout,
    children: [
      {
        name: 'Document',
        path: 'index',
        meta: {
          title: 'route.document',
          icon: 'document',
        },
      },
    ],
  },

  // 引导页
  {
    path: '/guide',
    component: Layout,
    children: [
      {
        name: 'Guide',
        path: 'index',
        meta: {
          title: 'route.guide',
          icon: 'guide',
        },
      },
    ],
  },
]
