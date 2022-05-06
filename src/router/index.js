import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const routes = [
  { // Home
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'Home'
        },
        component: () => import('@/views/home')
      }
    ]
  },

  { // Test
    path: '/test',
    component: Layout,
    redirect: '/test/import',
    name: 'Test',
    meta: {
      title: 'Test'
    },
    children: [
      {
        path: 'import',
        name: 'TestImport',
        meta: {
          title: '导入'
        },
        component: () => import('@/views/test/import')
      },
      {
        path: 'get-data',
        name: 'TestGetData',
        meta: {
          title: '获取数据'
        },
        component: () => import('@/views/test/getData')
      }
    ]
  },

  { // Config
    path: '/config',
    component: Layout,
    redirect: '/config',
    children: [
      {
        path: '',
        name: 'Config',
        meta: {
          title: 'Config'
        },
        component: () => import('@/views/config')
      }
    ]
  }
]

export default new Router({
  routes
})
