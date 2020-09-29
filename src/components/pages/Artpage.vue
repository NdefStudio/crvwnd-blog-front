<template>
  <div id='artpage'>
    <Keepout />
  </div>
</template>

<script>
import Keepout from './Keep-out'
export default {
  components: { Keepout }
}
</script>

<style>
#artpage {
  background-color: rgb(0, 247, 255);
  width: 100%;
  height: 100%;
}
</style>