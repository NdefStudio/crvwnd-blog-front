<!--  这是为了做出背景图而写的页面（因为功耗太大就截图做背景了）
<template>
  <div id='keep-out'>
    <div class='blackbackground'></div>
    <div class='keep-out-band'>
      <div class='yellowbackground'>
        <div class='black-tile'
             v-for='(i,index) in range(12)'
             :key='index'></div>
      </div>
      <div class='keep-out-word-main'><b>施工中</b>
      </div>

      <div class='keep-out-band-sub'
           style='transform:rotate(30deg);z-index:-1;left:-5%;top:100%'>
        <div class='yellowbackground-sub'>
          <div class='keep-out-word-wrap'>
            <p v-for='(i,index) in range(8)'
               :key='index'
               class="keep-out-word"><b>keep</b><b>out</b></p>
          </div>
        </div>
      </div>
      <div class='keep-out-band-sub'
           style='transform:rotate(15deg);z-index:-2;left:-5%;top:300%;'>
        <div class='yellowbackground-sub'>
          <div class='keep-out-word-wrap'>
            <p v-for='(i,index) in range(8)'
               :key='index'
               class="keep-out-word"><b>keep</b><b>out</b></p>
          </div>
        </div>
      </div>

      <div class='keep-out-band-sub'
           style='transform:rotate(-58deg);z-index:-3;left:-5%;top:300%;'>
        <div class='yellowbackground-sub'>
          <div class='keep-out-word-wrap'>
            <p v-for='(i,index) in range(8)'
               :key='index'
               class="keep-out-word"><b>keep</b><b>out</b></p>
          </div>
        </div>
      </div>
      <div class='keep-out-band-sub'
           style='transform:rotate(-27deg);z-index:-4;left:-5%;top:-200%;'>
        <div class='yellowbackground-sub'>
          <div class='keep-out-word-wrap'>
            <p v-for='(i,index) in range(8)'
               :key='index'
               class="keep-out-word"><b>keep</b><b>out</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    range: function(n) {
      let a = []
      for (let i = 1; i <= n; i++) {
        a.push(i)
      }
      return a
    }
  }
}
</script>

<style>
.keep-out-word > b {
  margin-right: 20px;
}

.keep-out-word {
  white-space: nowrap;
  height: 60px;
  line-height: 60px;
}
.keep-out-word-wrap {
  font-size: 60px;
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.yellowbackground-sub::before {
  content: '';
  position: relative;
  top: 5px;
  width: 100%;
  height: 5px;
  background-color: black;
}

.yellowbackground-sub::after {
  content: '';
  position: relative;
  bottom: 5px;
  width: 100%;
  height: 5px;
  background-color: black;
}

.yellowbackground-sub {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 208, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.blackline {
  position: relative;
  top: 5px;
  width: 100%;
  height: 5px;
  background-color: black;
}

.keep-out-word-main::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  background-color: black;
  transform: skew(45deg);
}
.keep-out-word-main {
  position: relative;
  font-size: 80px;
  width: 400px;
  left: 50%;
  transform: translateX(-50%);
  color: rgb(255, 208, 0);
  margin: 10px;
}

.black-tile {
  width: 4%;
  height: 100%;
  transform: skew(45deg);
  background-color: black;
}

.keep-out-band-sub {
  width: 120%;
  height: 80px;
  position: absolute;
}

.keep-out-band {
  width: 120%;
  height: 120px;
  position: fixed;
  top: 50%;
  left: -10%;
  transform: translateY(-50%);
}

.yellowbackground {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 208, 0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.blackbackground {
  background-color: black;
  opacity: 0.5;
  transition: all 0.5s;
  width: 100%;
  height: 100%;
}

#keep-out {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
-->

<template>
  <div id='keep-out'>
    <div class='blackbgc' />
    <div class='keepout' />
  </div>
</template>

<script>
export default {}
</script>

<style>
.blackbgc {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
}

.keepout {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('../../assets/img/keep-out.png');
  background-size: cover;
  background-position: center center;
}

#keep-out {
  width: 100%;
  height: 100%;
}
</style>