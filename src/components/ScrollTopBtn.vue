<template>
  <div class="scroll-top-btn" @click="moveToTop">
    回<br>到<br>顶<br>部
  </div>
</template>

<script>
    export default {
        name: "scroll-top-btn",
      methods:{
          moveToTop(){
            let interval=setInterval(function () {
              document.documentElement.scrollTop-=30
              if(document.documentElement.scrollTop===0){
                clearInterval(interval)
              }
            },1)
          }
      }
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
    user-select: none;
    cursor: pointer;
  }
</style>
