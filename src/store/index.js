import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'vue-cookies'
import axios from 'axios'
Vue.use(Cookies)
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    apiserver: 'http://localhost:3000/api/',
    token: Cookies.get('Token')
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  getters: {
    token (state) {
      console.log('token:' + state.token)
      return (state.token ? true : false)
    }
  },
  actions: {
    LoginByUsername ({ commit }, userInfo) {
      const acc = userInfo.acc.trim()
      return new Promise((resolve, reject) => {
        axios
          .get(this.state.apiserver + 'login', {
            params: {
              acc: acc, pass: userInfo.pass
            }
          })
          .then(response => {
            const data = response.data
            console.log(data)
            if (data.status == 1) {
              Cookies.set('Token', response.data.token, '1h', '', '', '', 'Strict') //登录成功后将token存储在cookie之中
              commit('SET_TOKEN', data.token)
              resolve()
            }
            else if (data.status == 0) {
              reject()
            }
          })
          .catch(error => {
            reject(error)
          })
      });
    },
    checkToken () {
      return new Promise((resolve, reject) => {
        axios
          .get(this.state.apiserver + 'verify', {
            params: {
              token: this.state.token
            }
          })
          .then(response => {
            const data = response.data
            console.log(data)
            if (data.status == 10000) {
              resolve()
            }
            else if (data.status == 10010) {
              reject()
            }
          })
          .catch(error => {
            reject(error)
          })
      });
    }

  },
  modules: {
  }
})
