<template>
  <div id='blogframework'>
    <div class='blogframework_content'>
      <Header @switchSidebar='switchSidebar'>
        <p>首页</p>
      </Header>
      <div class='imgbackground'>
        <div class="imgbackground-blur"></div>
      </div>
      <div class='container'>
        <transition :name="transitionName">
          <router-view style="position:absolute"
                       @displayCardDetail='displayCardDetail' />
        </transition>
      </div>

      <div class='floatleft'>
        <Toolcard v-if="showtool" />
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
               v-if="sidebaropen"
               @switchTool="switchTool"
               :showtool="showtool" />
    </transition>
    <transition name='BlogcardDetailfade'>
      <BlogcardDetail v-if='blogdetailopen'
                      class='detail'>
        <p slot='title'>{{blogdetail.title}}</p>
        <article slot='main'
                 v-html='blogdetail.html'></article>
        <p slot='footer'>{{blogdetail.date}}</p>
      </BlogcardDetail>
    </transition>
  </div>
</template>

<script>
import Header from '../components/comps/Header'
import Sidebar from '../components/comps/Sidebar'
import BlogcardDetail from '../components/comps/BlogcardDetail'
import Toolcard from '../components/comps/Toolcard'

export default {
  name: 'Blogframework',
  components: {
    Header,
    Sidebar,
    BlogcardDetail,
    Toolcard,
  },
  data() {
    return {
      sidebaropen: false,
      coveron: false,
      blogdetail: [],
      blogdetailopen: false,
      transitionName: '',
      showtool: true,
    }
  },
  methods: {
    switchSidebar: function () {
      this.sidebaropen = true
      this.coveron = true
    },
    switchTool: function () {
      this.showtool = !this.showtool
    },
    clickBlank: function () {
      //console.log('click blank')
      this.sidebaropen = false
      this.coveron = false
      this.blogdetailopen = false
    },
    clickSidebar: function () {
      //console.log('click sidebar')
    },
    displayCardDetail: function (blog) {
      this.coveron = true
      this.blogdetail = blog
      this.blogdetailopen = true
      //console.log('open' + blog.title)
    },
  },
  // watch $route 决定使用哪种过渡,同样来自 https://juejin.im/post/5ba358a56fb9a05d2068401d
  watch: {
    $route(to, from) {
      //此时假设从index页面跳转到pointList页面
      //console.log(to) // "/pointList"
      //console.log(from) // “/index”
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right'
    },
  },
}
</script>

<style>
/**
来自 https://juejin.im/post/5ba358a56fb9a05d2068401d 的页面跳转动画
 */

.imgbackground-blur {
  background: url('../../assets/img/68296699_p0_master1200.jpg') no-repeat;
  background-position: 0, -200px;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10;
  filter: blur(3px);
}
.imgbackground {
  background: url('../../assets/img/68296699_p0_master1200.jpg') no-repeat;
  background-position: 0, -200px;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -11;
}

.fold-left-enter-active,
.fold-left-leave-active,
.fold-right-enter-active,
.fold-right-leave-active {
  transition: all 0.3s;
}
.fold-left-enter,
.fold-right-leave-to {
  transform: translateX(100%);
}

.fold-right-enter,
.fold-left-leave-to {
  transform: translateX(-100%);
}

.floatleft {
  position: fixed;
  left: 20px;
  top: 90px;
  width: 20%;
}

.blank {
  width: 25%;
}

.detail {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 80%;
  max-height: 80%;
  z-index: 11;
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
  z-index: 0;
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
  transform: translateX(200px);
}

.subblock {
  height: 100%;
  width: 200px;
  position: fixed;
  right: 0;
  background-color: rgb(245, 245, 245);
  z-index: 100;
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
  z-index: 99;
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
