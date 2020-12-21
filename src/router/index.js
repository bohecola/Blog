import Vue from 'vue'
import VueRouter from 'vue-router'

  const ArticleList = () =>import('@/views/articlelist/ArticleList')
  const Article = () =>import('@/views/article/Article')
  const Album = () => import('@/views/album/Album')
  const Tool = () => import('@/views/tool/Tool')
  const Game = () => import('@/views/game/Game')
  const NotFound = () => import('@/views/notfound/NotFound')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    // 前台
    path: '',
    component: ArticleList,
  },
  {
    path: '/',
    component: ArticleList
  },
  // 展示对应 id 的博文
  {
    path: '/article/:id' ,
    name: 'article',
    component: Article,
  },
  {
    path: '/album',
    component: Album
  },
  {
    path: '/tool',
    component: Tool
  },
  {
    path: '/game',
    component: Game
  },
  {
    path: '*',
      name: 'notfount',
      component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // document.title = to.matched[0].meta.title
  document.title = 'かぐや'
  next()
})  

export default router