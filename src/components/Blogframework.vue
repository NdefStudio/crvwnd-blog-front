<template>
  <div id='blogframework'>

    <div class='blogframework_content'>
      <Header @switchSidebar='switchSidebar'></Header>
      <Bloglist></Bloglist>
      <Footer></Footer>
    </div>

    <div @click='clickBlank'
         class="mask"
         v-if="sidebaropen">
      <Sidebar class="subblock"
               @click.native.stop='clickSidebar'></Sidebar>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Bloglist from '../components/Bloglist'

export default {
  name: 'Blogframework',
  components: {
    Header,
    Footer,
    Sidebar,
    Bloglist
  },
  data() {
    return {
      sidebaropen: false
    }
  },
  methods: {
    switchSidebar: function() {
      this.sidebaropen = true
    },
    clickBlank: function() {
      console.log('click blank')
      this.sidebaropen = false
    },
    clickSidebar: function() {
      console.log('click sidebar')
    }
  }
}
</script>

<style>
.subblock {
  height: 100%;
  width: 100px;
  position: fixed;
  right: 0;
  background-color: rgb(245, 245, 245);
}
#blogframework {
  width: 100%;
  height: 100%;
}

.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.blogframework_content {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
