import request from '@/utils/request'

// 前台页面获取头像 (请求游客模式中的接口)
export const getUserInfo = (query) => request({
  url: '/api/v1/avatar',
  method: 'get',
  params: query
})
