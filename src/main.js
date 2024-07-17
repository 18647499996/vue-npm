import { createApp } from 'vue'
import App from '../src/App.vue'
import Router from '../src/router/index.js'
import Antd from '../src/plugin/index.js'


createApp(App).use(Antd).use(Router).mount('#app')
