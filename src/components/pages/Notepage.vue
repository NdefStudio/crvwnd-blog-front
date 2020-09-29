<template>
  <div id='notelist'>
    <Keepout />
  </div>
</template>

<script>
import Keepout from './Keep-out'
export default {
  components: {
    Keepout
  }
}
</script>

<style>
#notelist {
  background-color: #58e;
  width: 100%;
  height: 100%;
}
</style>