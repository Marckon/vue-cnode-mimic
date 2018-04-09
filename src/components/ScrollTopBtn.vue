<template>
  <div class="scroll-top-btn">
    回<br>到<br>顶<br>部
  </div>
</template>

<script>
    export default {
        name: "scroll-top-btn"
    }
</script>

<style scoped>
  .scroll-top-btn{
    height:100px;
    width:40px;
    position: fixed;
    right: 0;
    bottom: 200px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    color:#a18080;
  }
</style>
