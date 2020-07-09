<template>
  <div id='header'>
    <div class="blankspace"></div>
    <h1 class="title">This is header</h1>

    <svg @click="onClickSidebar"
         id='rightmost'
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
    }
  }
}
</script>

<style>
#header {
  background-color: rgb(240, 240, 240);
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
}
.icon {
  font-size: 30px;
}
.blankspace {
  width: 70px;
  height: 70px;
}
#rightmost {
  padding: 20px;
}
.title {
  flex: 1;
}
</style>