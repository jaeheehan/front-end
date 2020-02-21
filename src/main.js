import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { i18n } from './i18n'
import eventBus from './event-bus'
import realTimeClient from '@/real-time-client'

axios.defaults.baseURL = '/api'
axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.response.use(
  response => response,
  (error) => {
    return Promise.reject(error)
  }
)

Vue.use(Vuelidate)
Vue.config.productionTip = false

Vue.config.devtools = true

// Set up FontAwesome
faLibrary.add(faHome, faSearch, faPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$bus = eventBus
Vue.prototype.$rt = realTimeClient

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
