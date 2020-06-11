import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login/Login.vue'
import Reset from '@/views/Login/Reset.vue'
import Register from '@/views/Login/Register.vue'
import Stack from '@/views/Stack.vue'

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
    path: '/stack',
    name: 'Stack',
    component: Stack,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/Reset',
    name: 'Reset',
    component: Reset,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export { routes }
export default router
