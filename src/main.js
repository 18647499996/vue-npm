// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 移动端适配
import 'lib-flexible/flexible.js'
// 刘冬涵组件
import utils from '@/utils'

Vue.prototype.$cdn = $cdn

Vue.config.productionTip = false


utils.LocationManagerUtils.config.securityJsCode = 'c3f8f130c3b04cdc91ef6675d6d57df6'
utils.LocationManagerUtils.config.key = '145a824b05ee52a2dd6fd4abbc1f6025'
Vue.prototype.utils = utils
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
