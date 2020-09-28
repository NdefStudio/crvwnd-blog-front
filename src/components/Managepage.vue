<template>
  <div id='manage'>
    <div class='md-input'>
      <input type="text"
             class='titleinput'
             v-model="title">
      <mavon-editor v-model="value"
                    @change="mdChange"
                    fontSize="20px"
                    style="max-height:70%" />
    </div>
    <div class='Cbutton'
         @click='publish'>发布</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      md: '',
      html: '',
      title: '',
      value: '',
    }
  },
  methods: {
    /*
    时间使用服务器时间
    MongoDB的datetime格式如："Tue Jul 14 2020 18:58:26 GMT+0800"

    update:后端弃用MongoDB的datetime类型，使用当前utc的字符串
    */
    publish: function () {
      if (this.$store.getters.token) {
        this.$myaxios
          .post(this.$store.state.apiserver + 'pblog', {
            md: this.md,
            html: this.html,
            title: this.title,
            token: this.$store.state.token,
          })
          .then((response) => {
            console.log(response.data)
            this.md = ''
            this.html = ''
            this.title = ''
            this.value = ''
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    mdChange: function (value, render) {
      this.md = value
      this.html = render
      //console.log(this.md)
      //console.log(this.html)
    },
  },
}
</script>

<style>
.titleinput {
  height: 40px;
  flex: 1;
  font-size: 30px;
  margin: 10px;
}

.Cbutton {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 10px;
  width: 100px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 40px;
  color: grey;
}

.md-input {
  width: 100%;
  height: 100%;
}

#manage {
  width: 100%;
  height: 100%;
}
</style>