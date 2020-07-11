import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import "../assets/fonts/iconfont.js"
import global from '../src/js/global.js'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

Vue.prototype.global = global
Vue.prototype.$myaxios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
