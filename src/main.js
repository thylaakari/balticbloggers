import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import VueCarousel from 'vue-carousel'
import Backendless from 'backendless'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import FileUpload from 'v-file-upload'

Vue.use(FileUpload)

Vue.config.productionTip = false

const APP_ID = 'D016D00F-53A3-4669-FFC7-A20D8A442E00'
const API_KEY = 'E913C5D3-CFC5-494B-A94A-8A6FF526F9B0'

Backendless.initApp(APP_ID, API_KEY)

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.use(VueCarousel)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
