<template>
  <div id='toolcard'
       @mousedown.stop="mousedown">
    <div class="cardbgc toolitem card">
      <div class="hidebar">
        <div class="blank_fill" />
        <svg @click="onClickToolbar"
             class='icon'
             aria-hidden='true'>
          <use xlink:href='#icon-shuju6'></use>
        </svg>
      </div>
      <div class='timecard'>
        <div class="timenumber">{{hour}}</div>
        <div class="timenumber"
             style="transform:translateY(-15px)">:</div>
        <div class="timenumber">{{min}}</div>
        <div class="timenumber"
             style="transform:translateY(-15px)">:</div>
        <div class="timenumber">{{sec}}</div>
      </div>
    </div>
    <transition-group name='opentool'
                      style='min-height:5px;width:100%'>
      <div class="cardbgc toolitem"
           style='z-index:-1;'
           v-if="toolopen"
           key=0>
        <div class="calendar">
          <calendar />
        </div>
        <div class="toolbarend" />
      </div>
      <div class="toolbarend"
           v-else
           key=1>
      </div>
    </transition-group>

  </div>
</template>

<script>
import Calendar from './Calendar'

export default {
  components: {
    Calendar
  },
  data() {
    return {
      toolopen: false,
      selectElement: '',
      hour: '',
      min: '',
      sec: ''
    }
  },
  created() {
    setInterval(this.getTime, 1000)
  },
  methods: {
    getTime: function() {
      var _this = this
      let hh = new Date().getHours()
      let mf =
        new Date().getMinutes() < 10
          ? '0' + new Date().getMinutes()
          : new Date().getMinutes()
      let ss =
        new Date().getSeconds() < 10
          ? '0' + new Date().getSeconds()
          : new Date().getSeconds()
      _this.hour = hh
      _this.min = mf
      _this.sec = ss
    },
    onClickToolbar: function() {
      this.toolopen = !this.toolopen
    },
    /*
    来自 https://www.cnblogs.com/higiser/p/9340237.html 的可拖拽组件代码
    */
    mousedown(event) {
      this.selectElement = document.getElementById('toolcard')
      var div1 = this.selectElement
      this.selectElement.style.cursor = 'move'
      this.isDowm = true
      var distanceX = event.clientX - this.selectElement.offsetLeft
      var distanceY = event.clientY - this.selectElement.offsetTop
      // alert(distanceX)
      // alert(distanceY)
      console.log(distanceX)
      console.log(distanceY)
      document.onmousemove = function(ev) {
        var oevent = ev || event
        div1.style.left = oevent.clientX - distanceX + 'px'
        div1.style.top = oevent.clientY - distanceY + 'px'
      }
      document.onmouseup = function() {
        document.onmousemove = null
        document.onmouseup = null
        div1.style.cursor = 'default'
      }
    }
  }
}
</script>

<style>
.toolbarend {
  width: 100%;
  height: 5px;
  background-color: rgb(131, 230, 255);
  z-index: -1;
}

.toolitem {
  width: 100%;
}

.opentool-move {
  transition: all 0.5s;
}

.opentool-enter-active {
  transition: all 0.3s;
}
.opentool-leave-active {
  transition: all 0.5s;
  position: absolute;
}

.opentool-enter,
.opentool-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.timenumber {
  padding: 10px;
}

@font-face {
  font-family: 'LiquidCrystal';
  src: url('../../assets/fonts/LiquidCrystal-Normal.otf');
}

.hidebar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(131, 230, 255);
}

.icon {
  font-size: 30px;
  padding: 10px;
}

.timecard {
  padding: 10px 20px 20px 20px;
  font-size: 60px;
  font-family: LiquidCrystal;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#toolcard {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  position: absolute;
}
</style>