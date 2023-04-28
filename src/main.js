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

Vue.prototype.$cdn = $cdn

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'

// filters
import './filters'

// 引入微信包
const wx = require("weixin-js-sdk")
window.wx = wx

// 引入echarts
const echarts = require('echarts')
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false
Vue.use(ElementUI)
import {
  Icon, Tab, Tabs, Field, Uploader,
  Cell, Sticky, NavBar, Swipe, SwipeItem, List,PullRefresh,
  Skeleton, NoticeBar, Grid, GridItem, Col,
  Row, Empty, Search, Popup, Picker, Checkbox,
  Image as VanImage, Dialog,SubmitBar,ActionSheet,
  RadioGroup, Radio,Switch,Divider,Step,Steps
} from 'vant'

Vue.use(VanImage)
Vue.use(Skeleton)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Field)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Uploader)
Vue.use(Cell)
Vue.use(Sticky)
Vue.use(NoticeBar)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Empty)
Vue.use(Search)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(SubmitBar);
Vue.use(ActionSheet);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Switch);
Vue.use(Divider);
Vue.use(Step);
Vue.use(Steps);


import BaiduMap from 'vue-baidu-map'
import utils from '@/utils'
utils.LocationManagerUtils.config.securityJsCode = 'c3f8f130c3b04cdc91ef6675d6d57df6'
utils.LocationManagerUtils.config.key = '145a824b05ee52a2dd6fd4abbc1f6025'

Vue.use(BaiduMap, {
  ak: 'N5C1SO5Wd2Q5RIQoNIPSpzGaynpjiYsV'
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
