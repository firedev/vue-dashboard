import GoTrue from 'gotrue-js'
import { init as netlifyInit } from 'netlify-identity-widget'
import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueFirestore)
Vue.use(VueGtag, {
  config: { id: 'UA-69016906-1' },
})

netlifyInit()

const auth = new GoTrue({
  APIUrl: 'https://firedev-vue-dashboard.netlify.app/.netlify/identity',
  setCookie: true,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

export { auth }
