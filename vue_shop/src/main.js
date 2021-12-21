import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
// 导入字体图标
// 导入字体图标
import './assets/fonts/iconfont.css'
import less from 'less'

import axios from 'axios'
// 配置请求路径
axios.defaults.baseURL ='https://lianghj.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
// 把axios包挂载到Vue的原型对象上
Vue.prototype.$http=axios

Vue.config.productionTip = false
Vue.use(less);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
