import axiosServer from 'axios'


export function baseApi() {
  console.log('api')
  return this
}

export function setConfig() {
  console.log('config')
  return this
}

export function setRequestHead(){
  return this
}

export function addInterceptors(){
  return this
}

export function responseListener(){
  return this
}

export default {
  baseApi,
  setConfig,
  setRequestHead,
  addInterceptors,
  responseListener
}
