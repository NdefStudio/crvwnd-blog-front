<template>
  <div id='blogcard'>
    <div class="title">
      <slot name='title'>
        <h2>默认标题</h2>
      </slot>
    </div>
    <div class="main chinesespace">
      <slot name='main'>
        <p>默认内容</p>
      </slot>
    </div>
    <div class='wrap'>
      <div class='blank'></div>
      <div class="footer">
        <slot name='footer'>
          <p>默认脚注，显示时间和评论按钮</p>
        </slot>
      </div>
    </div>
    <div class='comment'>
      <slot name='comment'></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#blogcard {
  background-color: rgb(250, 250, 250);
  border-color: darkgray;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  text-align: start;
}
.title {
  font-size: 32px;
  text-align: center;
}
.main {
  font-size: 20px;
  padding: 10px;
}
.footer {
  font-size: 18px;
  color: gray;
  border-top-style: solid;
  border-width: 2px;
  border-color: gray;
  padding: 10px;
  padding-left: 50px;
  text-align: end;
}
.wrap {
  display: flex;
  flex-direction: row;
}
.blank {
  flex: 1;
}
.chinesespace {
  text-indent: 2em;
}
</style>