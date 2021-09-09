import axios from 'axios'
import store from '@/store'
import router from '@/router'

import { MessageBox, Message } from 'element-ui'
import { getToken, setToken, removeToken, setSkiShop,getSkipShop,setActive,getActive} from '@/utils/auth'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        message: '加载中..',
        forbidClick: true,
        duration:0
      })
    }
    if (store.getters.token) {
      config.headers['X-Token'] = ''
    }
    if (getToken() !== '') {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.clear()
    const data = response.data
    const request = response.request
    if (request.status === 200) {
      console.log('请求信息：\n' +
        request.responseURL + '\n' +
        response.config.url + '\n' +
        response.config.headers.Authorization + '', data)

      if (data.code === 0) {
        return Promise.resolve(data)
      } else {
        return Promise.reject(data.msg)
      }
    } else {
      Message.error({
        message: '服务器连接异常，请稍后连接！',
        duration: 1000
      })
    }
  },
  error => {
    Toast.clear()
    let code = 0
    try {
      code = error.response.data.code
      console.log('异常信息：', error)
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Message.error({
          message: '网络请求超时',
          duration: 2000
        })
        return Promise.reject(error)
      }
    }
    if (code) {
      if (code === 401) {
        Message.error({
          message: '登录状态已过期，重新登录！',
          duration: 1500
        })
        if (error.response.config.url === '/api/Mall/GetMall?') {
          setSkiShop()
        }
        if(error.response.config.url==='api/Activity/GetActivity?'){
          setActive();
        }


        removeToken()
        router.push('/verify_login')
      } else {
        const errorMsg = error.response.data.message
        if (errorMsg !== undefined) {
          Message.error({
            message: errorMsg,
            duration: 2000
          })
        }
      }
    } else {
      Message.error({
        message: '接口请求失败',
        duration: 2000
      })
    }
    return Promise.reject(error)
  }
)

export default service
