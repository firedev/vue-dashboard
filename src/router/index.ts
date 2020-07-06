import Vue from 'vue'
import VueRouter from 'vue-router'

import { auth } from '@/main'
import Home from '@/views/Home.vue'
import Login from '@/views/Login/Login.vue'
import Logout from '@/views/Login/Logout.vue'
import Request from '@/views/Login/Request.vue'
import Reset from '@/views/Login/Reset.vue'
import Members from '@/views/Members.vue'
import Stack from '@/views/Stack.vue'

Vue.use(VueRouter)

const routes = [
  {
    component: Home,
    meta: { isInMenu: true },
    name: 'Home',
    path: '/',
  },
  {
    component: Stack,
    meta: { isInMenu: true },
    name: 'Stack',
    path: '/stack',
  },
  {
    component: Members,
    meta: {
      isInMenu: true,
      requiresAuth: true,
    },
    name: 'Members',
    path: '/members',
  },
  {
    component: Request,
    name: 'Request',
    path: '/request',
  },
  {
    component: Reset,
    name: 'Reset',
    path: '/reset',
  },
  {
    component: Login,
    name: 'Login',
    path: '/login',
  },
  {
    component: Logout,
    meta: { requiresAuth: true },
    name: 'Logout',
    path: '/logout',
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
})

router.beforeEach((to, _, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser()) {
    next('login')
  } else {
    next()
  }
})

export { routes }
export default router
