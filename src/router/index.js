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

  { // FormCreate
    path: '/form-create',
    component: Layout,
    redirect: '/form-create/import',
    name: 'FormCreate',
    meta: {
      title: 'FormCreate'
    },
    children: [
      {
        path: 'import',
        name: 'FormCreateImport',
        meta: {
          title: '导入'
        },
        component: () => import('@/views/form-create/import')
      }
    ]
  }
]

export default new Router({
  routes
})
