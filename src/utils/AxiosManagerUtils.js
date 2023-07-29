import axiosServer from 'axios'

const config = {
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: '',
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 30 * 1000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default
  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default
  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default
  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default
  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,
  // 定义允许请求内容最大尺寸
  maxBodyLength: 2000,
  // 是否显示加载框,
  isLoading: false
}

let axiosManager

/**
 * todo 创建axios引用
 */
export function createAxiosServer() {
  axiosManager = axiosServer.create(config)
  return this
}

/**
 * todo 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
 * @param httpUrl
 */
export function baseApi(httpUrl) {
  axiosManager.defaults.baseURL = httpUrl
  return this
}

/**
 * todo 是否显示加载框
 * @param isLoading
 */
export function isLoading(isLoading) {
  axiosManager.defaults.isLoading = isLoading
  return this
}

/**
 * todo 是即将被发送的自定义请求头
 * @param headers
 */
export function addHeaders(headers) {
  axiosManager.defaults.headers = headers
  return this
}

/**
 * todo 转换请求数据结果
 * @param transformResponseListener
 */
export function transformSchedulers(transformResponseListener) {
  axiosManager.interceptors.response.use(config => {
    // todo 避免重复引用数据转换，保证数据结构唯一性（ 只返回服务器数据结构 ）
    return transformResponseListener(undefined === config.config ? config : config.data)
  })
  return this
}

/**
 * todo 日志拦截器
 */
export function addLogcatInterceptors() {
  // 请求拦截
  let requestTime, responseTime
  axiosManager.interceptors.request.use(config => {
    requestTime = new Date().getTime()
    console.warn('请求数据：', config.baseURL + config.url, config.method, config.method === 'get' ? config.params : config.data)
    return config
  }, error => {
    return Promise.reject(error)
  })
  // 响应拦截
  axiosManager.interceptors.response.use(config => {
    responseTime = new Date().getTime()
    console.warn('返回数据：', config.request.responseURL, (responseTime - requestTime) + 's', config.data)
    return config
  }, error => {
    return Promise.reject(error)
  })
  return this
}

/**
 * todo 参数拦截器
 */
export function addParamsInterceptors(paramsListener) {
  axiosManager.interceptors.request.use(config => {
    return paramsListener(config)
  }, error => {
    return Promise.reject(error)
  })
  return this
}

/**
 * todo codeStatus拦截器
 */
export function addCodeInterceptors(codeStatusListener) {
  axiosManager.interceptors.response.use(config => {
    return codeStatusListener(config)
  }, error => {
    return Promise.reject(error)
  })
  return this
}

/**
 * todo post请求
 * @param url
 * @param data
 */
export function post(url, data) {
  return axiosManager.post(url, data)
}


/**
 * todo get请求
 * @param url
 * @param params
 */
export function get(url, params) {
  return axiosManager.get(url, { params: params })
}

/**
 * todo 获取fromData格式
 * @return {FormData}
 */
export function form(url, data) {
  const formData = new FormData()
  for (const item in data) {
    formData.append(item, data[item])
  }
  return post(url, formData)
}

/**
 * todo 合并请求
 * @param mergerRequest 合并请求（ 数组格式 ）
 * @param onSucceed 请求成功回调
 * @param onError 失败回调
 */
export function merger(mergerRequest, onSucceed, onError) {
  axiosServer.all(mergerRequest)
    .then(axiosServer.spread(function(...data) {
      onSucceed(data)
    }))
    .catch(error => {
      onError(error)
    })
}


export default {
  createAxiosServer,
  baseApi,
  addHeaders,
  isLoading,
  transformSchedulers,
  addLogcatInterceptors,
  addParamsInterceptors,
  addCodeInterceptors,
  post,
  get,
  merger,
  form
}
