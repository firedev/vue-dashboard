import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login/Login.vue'
import Reset from '@/views/Login/Reset.vue'
import Register from '@/views/Login/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Reset',
    name: 'Reset',
    component: Reset,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export { routes }
export default router
