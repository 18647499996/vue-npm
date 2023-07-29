import liudonghan from '@/utils/AxiosManagerUtils'

export function getShopApi() {
  return liudonghan
    .createAxiosServer()
    .baseApi('https://csapi1.xinfushenghuo.cn')
    .addLogcatInterceptors()
    .addParamsInterceptors(params => {
      return params
    })
    .addCodeInterceptors(code => {
      return code
    })
}

export function getLiveApi() {
  return liudonghan
    .createAxiosServer()
    .baseApi('https://zhibo.youdekan.me')
    .addHeaders({
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyRENCNzE2RTE3NzAzMjQxQjM5QzU4NTlCQjNDNDI5IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTA2MTE1NDIsImV4cCI6MTY5MTQ3NTU0MiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5sYXd4cC5jb20iLCJjbGllbnRfaWQiOiJhcHAiLCJzdWIiOiI3MThfaXN3ZWJvYTpUcnVlX2lzd2VzYWxlOkZhbHNlX2lzYWdlbnQ6RmFsc2UiLCJhdXRoX3RpbWUiOjE2OTA2MTE1NDIsImlkcCI6ImxvY2FsIiwiVXNlcklkIjoiMjEwMjk2MTExMCIsIm5hbWUiOiIxODY0NzQ5OTk5NiIsImdpdmVuX25hbWUiOiLliJjlhqzmtrUiLCJlbWFpbCI6ImxpdWRvbmdoYW5AbGF3eHAuY29tIiwianRpIjoiODUzRUM3QjEwOUQyRDhBNzNDQUI3RDZBNENDQ0ZBN0QiLCJpYXQiOjE2OTA2MTE1NDIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.VmeXtYBt_MkA-7O1E0tQ5EU6crAJJFJ4iYeZjJqgzUyr4hZp96_J9lmms8AhehlD8XP6QxVvOS2Do2ol0Lq_v3-Zo8rAK_ebJHIU5SxOtqG4TdUZaRnzSHHvyBiu3CZV8n5fBO9Iwp_vKyOZTyqExsVIlR2vcmGy9Ydbr9a5aHCVVGiaOlD_6o9uOWsInq_bTGMUIXvYtbXNVf3alX8mUTJahI6zJq4qMrWu-ZCttU2v9eYDk6ajfpWYOJxHwCZogt3q7VeH1PoB1ekthOzz5DzA3uPd_8_UENv0_gRmpjdt5uqVPERKESOOeWv8qMxmR_jeTG3FNTGESW-2TgoYHg'
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

