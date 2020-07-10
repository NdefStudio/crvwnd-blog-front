<template>
  <div id='blogframework'>

    <div class='blogframework_content'>
      <Header @switchSidebar='switchSidebar'>
        <p>首页</p>
      </Header>
      <div class='container defaultbgc'>
        <Bloglist @displayCardDetail='displayCardDetail' />
      </div>
      <div class='floatleft'>
        <Toolcard />
      </div>
    </div>

    <transition name='coverfade'>
      <div @click='clickBlank'
           class="mask"
           v-if="coveron" />
    </transition>
    <transition name='sidebarslide'>
      <sidebar class="subblock"
               @click.native.stop='clickSidebar'
               v-if="sidebaropen" />
    </transition>
    <transition name='BlogcardDetailfade'>
      <BlogcardDetail v-if='blogdetailopen'
                      class='detail'>
        <p slot='title'>{{blogdetail.title}}</p>
        <article slot='main'
                 v-html='blogdetail.html'></article>
        <p slot='footer'>{{blogdetail.footer}}</p>
      </BlogcardDetail>
    </transition>
  </div>
</template>

<script>
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Bloglist from '../components/Bloglist'
import BlogcardDetail from '../components/BlogcardDetail'
import Toolcard from '../components/Toolcard'

export default {
  name: 'Blogframework',
  components: {
    Header,
    Sidebar,
    Bloglist,
    BlogcardDetail,
    Toolcard
  },
  data() {
    return {
      sidebaropen: false,
      coveron: false,
      blogdetail: [],
      blogdetailopen: false
    }
  },
  methods: {
    switchSidebar: function() {
      this.sidebaropen = true
      this.coveron = true
    },
    clickBlank: function() {
      console.log('click blank')
      this.sidebaropen = false
      this.coveron = false
      this.blogdetailopen = false
    },
    clickSidebar: function() {
      console.log('click sidebar')
    },
    displayCardDetail: function(blog) {
      this.coveron = true
      this.blogdetail = blog
      this.blogdetailopen = true
      console.log('open' + blog.title)
    }
  }
}
</script>

<style>
.floatleft {
  position: fixed;
  left: 20px;
  top: 90px;
  width: 20%;
}

.defaultbgc {
  background-color: rgb(202, 202, 202);
}

.cardbgc {
  background-color: rgb(250, 250, 250);
}

.blank {
  width: 25%;
}

.detail {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
}

.BlogcardDetailfade-enter-active,
.BlogcardDetailfade-leave-active {
  transition: all 0.5s;
}
.BlogcardDetailfade-enter,
.BlogcardDetailfade-leave-to {
  opacity: 0;
}

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
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
