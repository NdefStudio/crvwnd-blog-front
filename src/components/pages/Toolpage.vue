<template>
  <div id='toolpage'>
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
#toolpage {
  background-color: rgb(255, 82, 120);
  width: 100%;
  height: 100%;
}
</style>