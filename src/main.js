import Vue from 'vue'
import GoTrue from 'gotrue-js'
import { init as netlifyInit } from 'netlify-identity-widget'
import VueGtag from 'vue-gtag'
import VueFirestore from 'vue-firestore'

import Dash from './Dash.vue'
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
  router,
  store,
  render: h => h(Dash),
}).$mount('#app')

export { auth }
