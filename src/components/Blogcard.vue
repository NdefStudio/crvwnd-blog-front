<template>
  <div id='blogcard'>
    <div class="title">
      <slot name='title'>
        <h2>默认标题</h2>
      </slot>
    </div>
    <div class="main">
      <slot name='main'>
        <p>默认内容</p>
      </slot>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#blogcard {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 250, 250);
}
</style>