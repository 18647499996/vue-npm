// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 刘冬涵插件
import utils from '@/utils'

Vue.prototype.$cdn = $cdn
Vue.prototype.utils = utils
Vue.config.productionTip = false
Vue.prototype.utils.ConstantManagerUtils.config.mapSecurityCode = 'c3f8f130c3b04cdc91ef6675d6d57df6'
Vue.prototype.utils.ConstantManagerUtils.config.mapKey = '145a824b05ee52a2dd6fd4abbc1f6025'
Vue.prototype.utils.ConstantManagerUtils.config.timSdkId = '1400664826'
Vue.prototype.utils.ConstantManagerUtils.config.logLevel = 1

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
