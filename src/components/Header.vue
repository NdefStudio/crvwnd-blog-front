<template>
  <div id='header'>
    <svg @click="clickHome"
         id='rightmost'
         class='icon'
         aria-hidden='true'>
      <use xlink:href='#icon-zhufang'></use>
    </svg>

    <div class="headertitle"
         @click="clickHeaderTitle">
      <slot></slot>
    </div>

    <svg @click="clickSidebarButton"
         class='icon'
         aria-hidden='true'>
      <use xlink:href='#icon-caidan'></use>
    </svg>

  </div>

</template>

<script>
export default {
  data() {
    return {
      clicktitle: 0
    }
  },
  methods: {
    clickSidebarButton: function() {
      this.$emit('switchSidebar')
    },
    clickHome: function() {
      this.$router.push({ name: 'Blog' })
    },
    clickHeaderTitle: function() {
      if (++this.clicktitle >= 4) {
        this.$router.push('/login')
        this.clicktitle = 0
      }
      console.log(this.clicktitle)
    }
  },
  mounted() {
    this.clicktitle = 0
  }
}
</script>

<style>
#header {
  background-color: rgb(240, 240, 240);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.icon {
  font-size: 30px;
  padding: 20px;
}
.blankspace {
  width: 70px;
  height: 70px;
}

.headertitle {
  flex: 1;
  font-size: 30px;
  text-align: center;
}
</style>