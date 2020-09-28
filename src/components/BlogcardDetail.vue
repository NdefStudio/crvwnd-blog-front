<template>
  <div id='blogcarddetail'
       class="cardbgc">
    <div class="title_d full-width">
      <slot name='title'>
        <h2>默认标题</h2>
      </slot>
    </div>
    <div class="dashlinebox" />
    <div class="main_d chinesespace full-width">
      <slot name='main'>
        <p>默认内容</p>
      </slot>
    </div>
    <div class='wrap full-width'>
      <div class='blank_fill'></div>
      <div class="footer_d">
        <slot name='footer'>
          <p>默认脚注，显示时间和评论按钮</p>
        </slot>
      </div>
    </div>
    <div class='comment full-width'>
      <slot name='comment'></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.dashlinebox {
  border-bottom-style: dashed;
  border-color: darkgray;
  width: 30%;
}

.full-width {
  width: 100%;
}

#blogcarddetail {
  border-radius: 10px;
  padding: 10px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.title_d {
  font-size: 32px;
  text-align: center;
  padding-bottom: 20px;
  margin-top: 10px;
}
.main_d {
  font-size: 20px;
  padding: 10px;
  overflow-y: auto;
}
.footer_d {
  font-size: 18px;
  color: gray;
  border-top-style: solid;
  border-width: 2px;
  border-color: gray;
  padding: 10px;
  padding-left: 50px;
  text-align: end;
  margin-top: 50px;
  margin-right: 30px;
}
</style>