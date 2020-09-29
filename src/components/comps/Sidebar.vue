<template>
  <div id='sidebar'>
    <div class='avatar'><img src=""
           alt="头像"></div>

    <SidebarItem v-for='(item,index) in items'
                 :key='index'
                 :color='item.color'
                 @click.native='clickSidebarItem(index)'>
      <p>{{item.word}}</p>
    </Sidebaritem>
    <SidebarItem v-if='admin'
                 :color='manage.color'
                 @click.native="clickManage">
      <p>{{manage.word}}</p>
    </SidebarItem>
    <div v-if="showtool"
         class="switchbutton-on"
         @click="switchTool1"><b>隐藏工具</b></div>
    <div v-else
         class="switchbutton-off"
         @click="switchTool1"><b>显示工具</b></div>
  </div>
</template>

<script>
import SidebarItem from '../comps/SidebarItem'

export default {
  name: 'Sidebar',
  props: ['showtool'],
  components: { SidebarItem },
  data() {
    return {
      items: [
        {
          word: '首页',
          color: 'background-color: rgb(65, 185, 255);',
          url: '/',
        },
        {
          word: '笔记',
          color: 'background-color: rgb(75, 40, 14);',
          url: '/note',
        },
        {
          word: 'RP',
          color: 'background-color: rgb(244, 70, 239);',
          url: '/rp',
        },
        {
          word: '工具',
          color: 'background-color: rgb(44, 177, 41);',
          url: '/tools',
        },
        {
          word: '艺术（?',
          color: 'background-color: rgb(19, 79, 243);',
          url: '/Art',
        },
        {
          word: '关于我',
          color: 'background-color: rgb(97, 237, 173);',
          url: '/about',
        },
      ],
      manage: {
        word: '管理',
        color: 'background-color: rgb(0,0,0);',
        url: '/manage',
      },
      admin: false,
    }
  },
  mounted() {
    this.$store
      .dispatch('checkToken')
      .then(() => {
        this.admin = true
      })
      .catch((err) => {
        this.admin = false
        console.log(err)
      })
  },
  methods: {
    clickSidebarItem: function (index) {
      this.$router.push({ path: this.items[index].url })
    },
    clickManage: function () {
      this.$store
        .dispatch('checkToken')
        .then(() => {
          this.$router.push({ path: this.manage.url })
        })
        .catch((err) => {
          console.log(err) //登录失败提示错误，这里用的是message，考虑自己做一个toast效果（反正也不难）
        })
    },
    switchTool1: function () {
      this.$emit('switchTool')
    },
  },
}
</script>

<style>
.avatar {
  width: 130px;
  height: 130px;
  background-color: rgb(116, 116, 116);
  margin: 10px;
}
#sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.switchbutton-on {
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin: 10px;
  height: 50px;
  background-color: #98e68e;
  font-size: 30px;
  color: #000;
}
.switchbutton-off {
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin: 10px;
  height: 50px;
  background-color: #435145;
  font-size: 30px;
  color: snow;
}
</style>