<template>
  <div id='sidebaritem'
       @mouseenter="enter()"
       @mouseleave="leave()">
    <div class='container'>
      <div :class=hovered
           :style='color' />

      <div class='description'>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  data() {
    return {
      hovered: 'colortile'
    }
  },
  props: {
    color: {
      type: String,
      default: 'background-color: rgb(65, 185, 255);'
    }
  },
  methods: {
    enter: function() {
      this.hovered = 'colorblock'
    },
    leave: function() {
      this.hovered = 'colortile'
    }
  }
}
</script>

<style>
.container {
  position: relative;
}
.colortile {
  width: 5px;
  height: 30px;
  position: absolute;
  top: 14px;
  transition: all 0.3s;
}
.colorblock {
  width: 140px;
  height: 48px;
  position: absolute;
  top: 6px;
  opacity: 0.3;
  transition: all 0.3s;
}
.description {
  font-size: 28px;
  text-align: start;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  right: 0;
  width: 135px;
}

#sidebaritem {
  width: 100%;
  height: 40px;
  margin-top: 10px;
}
</style>