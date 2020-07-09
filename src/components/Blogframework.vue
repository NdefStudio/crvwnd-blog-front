<template>
  <div id='blogframework'>

    <div class='blogframework_content'>
      <Header @switchSidebar='switchSidebar'>
        <p>首页</p>
      </Header>
      <div id='container'>
        <Bloglist />
      </div>
    </div>

    <transition name='coverfade'>
      <div @click='clickBlank'
           class="mask"
           v-if="sidebaropen" />
    </transition>
    <transition name='sidebarslide'>
      <sidebar class="subblock"
               @click.native.stop='clickSidebar'
               v-if="sidebaropen" />
    </transition>
  </div>
</template>

<script>
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Bloglist from '../components/Bloglist'

export default {
  name: 'Blogframework',
  components: {
    Header,
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
#container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.coverfade-enter-active,
.coverfade-leave-active {
  transition: opacity 0.5s;
}
.coverfade-enter,
.coverfade-leave-to {
  opacity: 0;
}

.sidebarslide-enter-active,
.sidebarslide-leave-active {
  transition: all 0.5s;
}
.sidebarslide-enter,
.sidebarslide-leave-to {
  transform: translateX(150px);
}

.subblock {
  height: 100%;
  width: 150px;
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
