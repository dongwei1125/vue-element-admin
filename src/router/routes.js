import Layout from '@/layout'

export default [
  {
    path: '/login',
    component: () => import('@/views/login'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '首页',
          icon: 'el-icon-pie-chart',
        },
      },
    ],
  },
]
