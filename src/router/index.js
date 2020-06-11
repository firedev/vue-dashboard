import Vue from 'vue'
import VueRouter from 'vue-router'
import { currentUser as netlifyCurrentUser } from 'netlify-identity-widget'

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
    meta: {
      requiresAuth: 'true',
    },
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

router.beforeEach((to, from, next) => {
  const currentUser = netlifyCurrentUser()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next('login')
  } else {
    next()
  }
})

export { routes }
export default router
