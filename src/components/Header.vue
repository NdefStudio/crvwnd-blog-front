<template>
  <div id='header'>
    <svg @click="onClickHome"
         id='rightmost'
         class='icon'
         aria-hidden='true'>
      <use xlink:href='#icon-zhufang'></use>
    </svg>
    <div class="title">
      <slot></slot>
    </div>

    <svg @click="onClickSidebar"
         class='icon'
         aria-hidden='true'>
      <use xlink:href='#icon-caidan'></use>
    </svg>

  </div>

</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClickSidebar: function() {
      this.$emit('switchSidebar')
      console.log('click button')
    },
    onClickHome: function() {
      this.$router.push('/')
    }
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

.title {
  flex: 1;
  font-size: 30px;
  text-align: center;
}
</style>