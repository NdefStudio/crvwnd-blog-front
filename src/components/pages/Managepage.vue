<template>
  <div id='manage'>
    <div class="subblock-left">

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: [],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
.subblock-left {
  height: 100%;
  width: 200px;

  background-color: rgb(245, 245, 245);
  z-index: 80;
}

#manage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>