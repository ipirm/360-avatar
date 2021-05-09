import Vue from 'vue'
import App from './App.vue'

import VueThreeSixty from 'vue-360'

import 'vue-360/dist/css/style.css'

Vue.use(VueThreeSixty)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
