import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './rem/rem.js'

// 配置vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


// 配置axios信息
import axios from "axios"
axios.defaults.baseURL = ''
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token")
  config.headers = {
    deviceType: "H5"
  }
  return config
})
Vue.prototype.$axios = axios;

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path == '/login') return next()
//   const token = window.sessionStorage.getItem("token")
//   if (to.path == '/login') {
//     if (token !== null) {
//       next('/home')
//     }
//   } else {
//     if (token == null) {
//       return next('/login')
//     }
//   }
//   next()
// })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
