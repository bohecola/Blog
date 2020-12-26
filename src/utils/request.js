import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false
})

// 1. 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://172.81.242.64',
  timeout: 5000
})

// 2. 添加 axios 拦截器
// (1) 请求拦截
instance.interceptors.request.use(config => {
  NProgress.start()
  return config
}, err => {
  console.log(err)
})
// (2) 响应拦截 
instance.interceptors.response.use(res => {
  NProgress.done()
  return res.data
}, err => {
  // 服务器响应错误状态时返回对应的错误信息
  return Promise.reject(err.response.data)
})

export default instance