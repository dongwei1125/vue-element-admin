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

  // 401
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    meta: {
      hidden: true,
    },
  },

  // 404
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    meta: {
      hidden: true,
    },
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
        component: () => import('@/views/document'),
        meta: {
          title: 'route.document',
          icon: 'document',
          affix: true,
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
        component: () => import('@/views/guide'),
        meta: {
          title: 'route.guide',
          icon: 'guide',
        },
      },
    ],
  },

  // 个人中心
  {
    path: '/profile',
    component: Layout,
    meta: {
      hidden: true,
    },
    children: [
      {
        name: 'Profile',
        path: 'index',
        component: () => import('@/views/profile/index'),
        meta: {
          title: 'route.profile',
        },
      },
    ],
  },
]
