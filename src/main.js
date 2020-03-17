import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.use(VueCarousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
