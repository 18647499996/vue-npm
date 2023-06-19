import liudonghan from '@/utils/AxiosManagerUtils'

export function getShopApi() {
  return liudonghan
    .createAxiosServer()
    .baseApi('https://csapi1.xinfushenghuo.cn')
    .addLogcatInterceptors()
    .addParamsInterceptors(params => {
      console.log('参数拦截：',params)
      return params
    })
    .addCodeInterceptors(code => {
      console.log('code拦截：',code)
      return code
    })
}

export function getLiveApi() {
  return liudonghan
    .createAxiosServer()
    .baseApi('https://zhibo.youdekan.me')
    .addHeaders({
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyRENCNzE2RTE3NzAzMjQxQjM5QzU4NTlCQjNDNDI5IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2ODIzOTA3ODksImV4cCI6MTY4MzI1NDc4OSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5sYXd4cC5jb20iLCJjbGllbnRfaWQiOiJhcHAiLCJzdWIiOiI4MTE0MV9pc3dlYm9hOkZhbHNlX2lzd2VzYWxlOkZhbHNlX2lzYWdlbnQ6RmFsc2UiLCJhdXRoX3RpbWUiOjE2ODIzOTA3ODksImlkcCI6ImxvY2FsIiwiVXNlcklkIjoiMjEwMzQxNTgyMyIsIm5hbWUiOiJzaGl4dXJhbjA4MTEiLCJnaXZlbl9uYW1lIjoi5Y-y57uq5YaJIiwiZW1haWwiOiJzeHIwODExQDE2My5jb20iLCJqdGkiOiI2NzM1NDFGNUFDODMyOTVDMkZCNEVBOUFCQThEMTMzNSIsImlhdCI6MTY4MjM5MDc4OSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJjdXN0b20iXX0.k1iN61ehWtHpVVxBI3GPdsHtLaTECrVQG0SDkOlHC-8SecRW7tlweSN4KApIpAcn5WO0Un1I6aoRhPrqftZDIMuRv-Savxyfcehgk4cjAH0qbQjK2idF9bATOJOKzc_xI6fLElY8toHDbsCoAnVw7X9I6314cSL6rAv8fmKB0mTIOkP7Bj7vnRy9wWjRSRAPtWVZIzqKIG8gGwZEZWCCxBBoO2g3EG-1ILh6vMw1vZ-yOIOJ5HOl-ryH9LECYXYxqN7lenfqVVO0A7_dPifwsVYkzgA_J3Zl4iwrB42uKL8L7hZuF6X6xny30vOqQ9rz4g-ZJhW0_2RDh5gn21tSXg'
    })
    .addLogcatInterceptors()
    .addParamsInterceptors(params => {
      return params
    })
    .addCodeInterceptors(code => {
      return code
    })
}

export function getAxiosManger(){
  return liudonghan.createAxiosServer()
}

export default {
  getAxiosManger,
  getShopApi,
  getLiveApi,
}

