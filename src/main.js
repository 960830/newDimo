import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./rem/rem.js";

import http from "./utility/http.js";
Vue.prototype.$http = http;

// 配置vant
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

// 配置axios信息
import axios from "axios";
axios.defaults.baseURL = "http://120.53.31.103:84";
axios.interceptors.request.use((config) => {
    config.headers.Authorization = window.sessionStorage.getItem("token");
    config.headers = {
        deviceType: "H5",
    };
    return config;
});
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

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
