import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false
})

// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建router
const routes = [
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/content'
  },
  {
    path: '/content',
    component: Layout,
    meta: { title: '目录', icon: 'mdi-format-list-bulleted' },
    children: [
      {
        path: '',
        meta: { title: '目录' },
        component: () => import('@/views/content/Content')
      },
      {
        path: '/article/:id',
        hidden: true,
        meta: { title: '文章' },
        component: () => import('@/views/content/detail/index')
      }
    ]
  },
  {
    path: '/album',
    meta: { title: '专辑', icon: 'mdi-album' },
    component: Layout,
    children: [
      {
        path: '',
        meta: { title: '专辑' },
        component: () => import('@/views/album/Album')
      }
    ]
  },
  {
    path: '/game',
    meta: { title: '娱乐', icon: 'mdi-palette' },
    component: Layout,
    children: [
      {
        path: '',
        meta: { title: '娱乐' },
        component: () => import('@/views/game/Game')
      }
    ]
  },
  {
    path: '/tool',
    meta: { title: '工具', icon: 'mdi-apps' },
    component: Layout,
    children: [
      {
        path: '',
        meta: { title: '工具' },
        component: () => import('@/views/tool/Tool')
      }
    ]
  },
  {
    path: '*',
    hidden: true,
    component: Layout,
    children: [
      {
        path: '',
        meta: { title: '404' },
        component: () => import('@/views/error-page/404')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title =  to.meta.title + ' - Bohecola\'s Blog'
  next()
})  

router.afterEach(() => {
  NProgress.done()
})

export default router