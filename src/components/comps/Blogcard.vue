<template>
  <div id='blogcard'
       class="cardbgc">
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
      <div class='blank_fill'></div>
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
export default {
  methods: {},
}
</script>

<style>
main > ul,
main > ol {
  margin-left: 50px;
}

#blogcard {
  border-color: darkgray;
  border-radius: 10px;
  padding: 10px;
  text-align: start;
  overflow-wrap: normal;
  transition: all 0.3s;
  margin-top: 40px;
}
#blogcard:hover {
  transform: translateX(-100px);
}
.title {
  font-size: 32px;
  text-align: start;
  margin-left: 10px;
  padding: 10px;
}
.main {
  font-size: 20px;
  overflow: hidden;
  max-height: 200px;
  padding: 10px;
  margin-bottom: 20px;
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
.blank_fill {
  flex: 1;
}
.chinesespace > article > p {
  text-indent: 2em;
}
.chinesespace > article > li {
  text-indent: 0;
}
</style>