<template>
  <div id='bloglist'>
    <blogcard v-for='blog in blogs'
              :key='blog.index'
              class='mainblog'>
      <p slot='title'>{{blog.title}}</p>
      <article slot='main'
               v-html='blog.html' />
      <p slot='footer'>{{blog.footer}}</p>
    </blogcard>
    <Footer />
  </div>
</template>

<script>
import Blogcard from '../components/Blogcard'
import Footer from '../components/Footer'
export default {
  components: {
    Blogcard,
    Footer
  },
  data() {
    return {
      blogs: [
        {
          title: '测试',
          html: `<p>这是用v-html动态插入的html语句，为后面加图片和markdown解析做准备。这是用v-html动态插入的html语句，为后面加图片和markdown解析做准备。这是用v-html动态插入的html语句，为后面加图片和markdown解析做准备。这是用v-html动态插入的html语句，为后面加图片和markdown解析做准备。这是用v-html动态插入的html语句，为后面加图片和markdown解析做准备</p><p>这是分段的演示部分</p>`,
          footer: '2020/7/9 21:25'
        },
        {
          title: '测试2',
          html: `<p>这是第二张card</p>`,
          footer: '2020/7/9 21:25'
        },
        {
          title: '测试3',
          html: `<h1>h1测试喵喵喵喵喵喵喵喵</h1>`,
          footer: '2020/7/9 21:25'
        },
        {
          title: '测试4',
          html: `<h1>要溢出屏幕了啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</h1>`,
          footer: '2020/7/9 21:25'
        }
      ]
    }
  }
}
</script>

<style>
.mainblog {
  width: 80%;
  height: max-content;
}

#bloglist {
  width: 100%;
  height: 100%;
  background-color: rgb(202, 202, 202);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
}

.scrollbarforfirefox {
  width: calc(100% + 19px); /* 把滚动条挤出画面，给火狐准备的究极方案 */
}

#bloglist::-webkit-scrollbar {
  display: none;
}
</style>