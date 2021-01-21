import Vue from 'vue'
import VueRouter from 'vue-router'
import Gy from './Gy'
import Dky from './Dky'
import Gcy from './Gcy'

Vue.use(VueRouter)

const routes = [

  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../views/home.vue')
  // },
  ...Dky,
  ...Gcy,
  ...Gy
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
