<template>
    <div class="main-sector">
        <div class="title">
          <router-link to="/">主页</router-link>
          <span>{{currentPageName}}</span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "main-sector",
      computed:{
          currentPageName(){
            let path=this.$route.path
            switch (path){
              case '/getstart':
                return '/ Nodejs新手入门';
                break;
              case '/API':
                return '/ API';
                break;
              case '/about':
                return '/ 关于';
                break;
            }
          }
      }
    }
</script>

<style scoped>
  .main-sector{
    width:80%;
  }
  .title{
    height:40px;
    background-color: #f6f6f6;
    line-height: 40px;
    text-align: left;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding-left: 20px;
  }
  a{
    color:orange;
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
  .title span{
    color:#bbb;
  }

  @media screen and (max-width: 980px) {
    .main-sector{
      width:100%;
    }
  }
</style>
