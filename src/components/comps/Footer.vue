<template>
  <div id='footer'>
    <transition name='footer-trans'>
      <div class="footer-tile"
           v-if='visible'>
        <p><b>下面没有了</b></p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, default: true }
  }
}
</script>

<style>
#footer {
  margin-top: 200px;
  width: 100%;
}
.footer-tile {
  background-color: rgb(131, 202, 207);
  font-size: 20px;
  padding: 10px;
  color: aliceblue;
}
.footer-trans-enter-active,
.footer-trans-leave-active {
  transition: all 0.5s;
}

.footer-trans-enter,
.footer-trans-leave-to {
  transform: translateY(50px);
}
</style>