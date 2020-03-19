import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 'ru'
  },
  mutations: {
    setEn(state) {
      state.locale = 'en'
    },
    setRu(state) {
      state.locale = 'ru'
    }
  },
  getters: {
    locale: state => state.locale
  },
  actions: {
  },
  modules: {
  }
})
