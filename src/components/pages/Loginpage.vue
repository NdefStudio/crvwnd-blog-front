<template>
  <div id='loginpage'>
    <Toast time=3000
           class="stick-top"
           ref='toast'>
      登录失败
    </Toast>
    <div class="logincard cardbgc">

      <p style="text-align:center;font-size:40px;padding:20px;"><b>身份认证</b></p>
      <div class="inputcontainer">
        <p>用户名</p>
        <input type="text"
               @keyup="inputAccount">
      </div>
      <div class="inputcontainer">
        <p :class="wronginfo?`wronginfohint`:``">密码</p>
        <input type="password"
               @keyup="inputPassword"
               @keyup.enter="login">
      </div>
      <div class='loginbutton'
           @click="login">
        <p>登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '../comps/Toast'

export default {
  data() {
    return {
      acc: '',
      pass: '',
      wronginfo: false,
    }
  },
  components: { Toast },
  methods: {
    inputAccount: function (e) {
      this.acc = e.target.value
    },
    inputPassword: function (e) {
      this.pass = e.target.value
    },
    login: function () {
      //console.log(this.acc)
      //console.log(this.pass)
      //进行验证
      this.$store
        .dispatch('LoginByUsername', { acc: this.acc, pass: this.pass })
        .then(() => {
          this.$router.push({ path: '/manage' })
        })
        .catch((err) => {
          this.wronginfo = true
          this.$refs.toast.popToast()
          console.log(err) //登录失败提示错误，这里用的是message，考虑自己做一个toast效果（反正也不难）
        })
    },
  },
}
</script>

<style>
.stick-top {
  position: fixed;
  top: 10px;
}

.loginbutton {
  width: 80px;
  height: 50px;
  border: solid lightgray 2px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 20px;
  transition: all 0.5s;
  margin: 30px;
}

.loginbutton:hover {
  background-color: rgb(146, 239, 255);
}

.inputcontainer > p {
  margin-right: 20px;
  width: 90px;
}

.inputcontainer > input {
  height: 40px;
  flex: 1;
  font-size: 30px;
}

.inputcontainer {
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-size: 30px;
}

.logincard {
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

#loginpage {
  background-color: rgb(19, 6, 75);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>