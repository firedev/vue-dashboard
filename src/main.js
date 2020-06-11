import Vue from 'vue'
import GoTrue from 'gotrue-js'
import { init as netlifyInit } from 'netlify-identity-widget'

import App from './App.vue'
import router from './router'
import store from './store'

netlifyInit()

const auth = new GoTrue({
  APIUrl: 'https://firedev-vue-dashboard.netlify.app/.netlify/identity',
  setCookie: true,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export { auth }
