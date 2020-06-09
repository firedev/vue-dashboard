import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOCAL_STORAGE_KEY = 'isDarkMode'

if (
  !window.localStorage.getItem(LOCAL_STORAGE_KEY) &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
}

const state = {
  isDarkMode: window.localStorage.getItem(LOCAL_STORAGE_KEY) === 'true',
}

const mutations = {
  toggleDarkMode(state) {
    state.isDarkMode = !state.isDarkMode
    window.localStorage.setItem('isDarkMode', state.isDarkMode)
  },
}

const getters = {
  isDarkMode({ isDarkMode }) {
    return isDarkMode
  },
}

export default new Vuex.Store({
  getters,
  mutations,
  state,
})
