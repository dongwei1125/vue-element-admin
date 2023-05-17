import Layout from '@/layout'

export default [
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
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: {
      hidden: true,
    },
  },
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
          icon: 'el-icon-pie-chart',
          affix: true,
        },
      },
    ],
  },
]
