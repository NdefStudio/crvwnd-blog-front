import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../assets/fonts/iconfont.js"
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import store from './store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.use(infiniteScroll)

Vue.prototype.$myaxios = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if (!store.getters.token) { // 判断是否有token
      next()
    }
  } else if (to.path === '/manage') {
    if (store.getters.token) {
      next();
    } else {
      next('/login')
    }
  }
  else next()
}
);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

