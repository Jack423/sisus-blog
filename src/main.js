import Vue from 'vue'
import App from './App.vue'
import './quasar'
import router from './router'
import Viewer from 'v-viewer'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Viewer, {
  debug: true,
  defaultOptions: {
    zIndex: 9999
  }
})
