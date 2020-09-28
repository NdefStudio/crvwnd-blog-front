<template>
  <div id='blogpage'
       v-infinite-scroll="loadMore"
       infinite-scroll-disabled='stopload'
       infinite-scroll-distance="10">
    <transition-group tag='div'
                      name='cardslide'
                      class="left-blank">
      <blogcard v-for='(blog,index) in blogs'
                :key='index'
                class='mainblog'
                @click.native='clickCard(index)'>
        <p slot='title'>{{blog.title}}</p>
        <article slot='main'
                 v-html='blog.html' />
        <p slot='footer'>{{blog.date}}</p>
      </blogcard>
    </transition-group>
    <div class='loading'
         v-if="loading"></div>
    <Footer :visible='stopload' />
  </div>
</template>

<script>
import Blogcard from '../components/Blogcard'
import Footer from '../components/Footer'
export default {
  components: {
    Blogcard,
    Footer,
  },
  data() {
    return {
      blogs: [],
      loaded: 0,
      stopload: false,
      loading: false,
    }
  },
  mounted() {},
  methods: {
    clickCard: function (index) {
      this.$emit('displayCardDetail', this.blogs[index])
    },
    loadBlog: function (num) {
      this.$myaxios
        .get(this.$store.state.apiserver + 'blog', {
          params: {
            nowdate: new Date(),
            load: num, //每次同时加载的数量
            pos: this.loaded,
          },
        })
        .then((response) => {
          if (response.data.bloglist.length < num) {
            this.stopload = true
          } else {
            this.stopload = false
          }
          for (var i in response.data.bloglist) {
            this.blogs.push(response.data.bloglist[i])
            this.loaded++
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    loadMore: function () {
      this.loading = true
      //this.stopload = true
      this.loadBlog(5)
    },
  },
}
</script>

<style>
.cardslide-enter-active,
.cardslide-leave-active {
  transition: all 0.5s;
}

.cardslide-enter,
.cardslide-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.left-blank {
  padding-left: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mainblog {
  width: 80%;
  height: max-content;
}

#blogpage {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.scrollbarforfirefox {
  width: calc(100% + 19px); /* 把滚动条挤出画面，给火狐准备的究极方案 */
}

#blogpage::-webkit-scrollbar {
  display: none;
}
</style>