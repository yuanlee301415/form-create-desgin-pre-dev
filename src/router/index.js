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
  },


  { // FormCreateDesigner
    path: '/form-create-designer',
    component: Layout,
    redirect: '/form-create-designer/import',
    name: 'FormCreateDesigner',
    meta: {
      title: 'FormCreateDesigner'
    },
    children: [
      {
        path: 'import',
        name: 'FormCreateDesignerImport',
        meta: {
          title: '导入'
        },
        component: () => import('@/views/form-create-designer/import')
      },
      {
        path: 'get-data',
        name: 'FormCreateDesignerGetData',
        meta: {
          title: '获取数据'
        },
        component: () => import('@/views/form-create-designer/getData')
      }
    ]
  }
]

export default new Router({
  routes
})
