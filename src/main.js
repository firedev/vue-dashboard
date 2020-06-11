import Vue from 'vue'
import { init as netlifyInit } from 'netlify-identity-widget'
import App from './App.vue'
import router from './router'
import store from './store'

netlifyInit()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
