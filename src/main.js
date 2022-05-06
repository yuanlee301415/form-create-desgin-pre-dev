import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import '@/assets/style.css'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
