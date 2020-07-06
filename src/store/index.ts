import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOCAL_STORAGE_KEY = 'isDarkMode'

interface IDarkMode {
  [LOCAL_STORAGE_KEY]: boolean
}

if (
  !window.localStorage.getItem(LOCAL_STORAGE_KEY) &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
}

const state: IDarkMode = {
  isDarkMode: window.localStorage.getItem(LOCAL_STORAGE_KEY) === 'true',
}

const mutations = {
  // tslint:disable-next-line:no-shadowed-variable
  toggleDarkMode(state: IDarkMode) {
    state.isDarkMode = !state.isDarkMode
    window.localStorage.setItem(LOCAL_STORAGE_KEY, state.isDarkMode.toString())
  },
}

const getters = {
  // tslint:disable-next-line:no-shadowed-variable
  isDarkMode(state: IDarkMode) {
    return state[LOCAL_STORAGE_KEY]
  },
}

export default new Vuex.Store({
  getters,
  mutations,
  state,
})
