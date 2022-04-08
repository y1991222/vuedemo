import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
//require('./api/mock.js')

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
