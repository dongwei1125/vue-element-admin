import Layout from '@/layout'

export default [
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
    meta: {
      title: '首页',
    },
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          title: '工作台',
          icon: 'el-icon-pie-chart',
        },
      },
    ],
  },
]
