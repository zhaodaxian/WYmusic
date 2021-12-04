<template>
  <div>
    23
  </div>
</template>
<script>
import { globalRequest } from '../utils/axios';
export default {
  mounted() {
    globalRequest('banner').then(res => {
      console.log(res)
    })
    // message.loading('Action in progress..', 0);
  },
}
</script>
<style>
  
</style>