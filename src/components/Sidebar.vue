<template>
  <div id='sidebar'>
    <div class='avatar'><img src=""
           alt="头像"></div>

    <SidebarItem v-for='item in items'
                 :key='item.index'
                 :color='item.color'>
      <p>{{item.word}}</p>
    </Sidebaritem>
  </div>
</template>

<script>
import SidebarItem from '../components/SidebarItem'

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  data() {
    return {
      items: [
        { word: '首页', color: 'background-color: rgb(65, 185, 255);' },
        { word: '笔记', color: 'background-color: rgb(75, 40, 14);' },
        { word: 'RP', color: 'background-color: rgb(244, 70, 239);' },
        { word: '工具', color: 'background-color: rgb(44, 177, 41);' },
        { word: '实验室', color: 'background-color: rgb(19, 79, 243);' },
        { word: '关于我', color: 'background-color: rgb(97, 237, 173);' }
      ]
    }
  }
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
</style>