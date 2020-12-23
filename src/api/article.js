import request from '@/utils/request'

// 文章列表
export const getArticleList = (query) => request({
  url: '/api/v1/articles/resources',
  method: 'get',
  params: query
})

// 文章详情
export const getArticleDetail = (query) => request({
  url: '/api/v1/articles',
  method: 'get',
  params: query
})
