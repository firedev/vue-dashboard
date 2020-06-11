import Vue from 'vue'
import VueRouter from 'vue-router'

import { auth } from '@/main'
import Home from '@/views/Home.vue'
import Login from '@/views/Login/Login.vue'
import Logout from '@/views/Login/Logout.vue'
import Reset from '@/views/Login/Reset.vue'
import Request from '@/views/Login/Request.vue'
import Stack from '@/views/Stack.vue'
import Members from '@/views/Members.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isInMenu: true,
    },
  },
  {
    path: '/stack',
    name: 'Stack',
    component: Stack,
    meta: {
      isInMenu: true,
    },
  },
  {
    path: '/members',
    name: 'Members',
    component: Members,
    meta: {
      isInMenu: true,
      requiresAuth: true,
    },
  },
  {
    path: '/request',
    name: 'Request',
    component: Request,
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser()) {
    next('login')
  } else {
    next()
  }
})

export { routes }
export default router
