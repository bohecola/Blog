import axios from 'axios'
import Message from 'vue-m-message'

// 1. 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

// 2. 添加 axios 拦截器
// (1) 请求拦截
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
})
// (2) 响应拦截 
service.interceptors.response.use(response => {
  return response
}, error => {
  // 服务器响应错误状态时返回对应的错误信息
  const { data, status, statusText } = error.response
  Message({
    type: 'error',
    title: 'Service Response Exception',
    message: `
      <p>status: ${status}</p>
      <p>statusText: ${statusText}</p>
      <p>message: ${data.message}</p>
    `,
    collapsable: false,
    duration: 3 * 1000,
    supportHTML: true
  })
  return Promise.reject(error.response)
})

export default service