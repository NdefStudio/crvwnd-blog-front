<template>
  <div id='toast'>
    <transition name='toastpop'>
      <div class="cardbgc toastcard"
           v-if="toaststat">
        <slot tag='p'></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['time'],
  data() {
    return { toaststat: false }
  },
  methods: {
    popToast: function() {
      this.toaststat = true
      let _this = this
      setTimeout(function() {
        _this.toaststat = false
      }, this.time)
    }
  }
}
</script>

<style>
.toastpop-enter,
.toastpop-leave-to {
  transform: translateY(-100px);
}

.toastpop-enter-active,
.toastpop-leave-active {
  transition: all 0.5s;
}

#toast {
  position: absolute;
  top: 0;
  height: 60px;
  width: 30%;
  margin: 10px;
}
.toastcard {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>