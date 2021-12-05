<template lang="">
  <div class="layout-box">
    <div class="layout-content">

    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
  body{
    overflow: hidden;
  }
  .layout-box{
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1px solid skyblue;
    .layout-content{
      position: relative;
      overflow: hidden;
      min-width: 1200px;
      min-height: 600px;
      width: calc(100vw - 120px);
      height: calc(100vh - 60px);
      margin: 30px;
      box-shadow: 20px 0 20px 2px #e6e6e6, -20px 0 20px 2px #e6e6e6, 0 20px 20px 2px #e6e6e6;
      box-sizing: border-box;
      border: 1px solid rgba(201,201,201,.6);
      border-radius: 8px;position: relative;
    }
  }
</style>

