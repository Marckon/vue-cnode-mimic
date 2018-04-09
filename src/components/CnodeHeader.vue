<template>

   <div class="header">
     <div class="tab-1">
       <div class="logo">
         <a href="/"><img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""></a>
       </div>
       <div class="search">
         <input type="text">
         <i  class="el-icon-search search-icon"></i>
       </div>
     </div>

     <div class="tabs">
       <router-link to="/home">首页</router-link>
       <router-link to="/getstart">新手入门</router-link>
       <router-link to="/api">API</router-link>
       <router-link to="/about">关于</router-link>
       <router-link to="/register">注册</router-link>
       <router-link to="/signin">登录</router-link>
     </div>
   </div>

</template>

<script>
  export default {
    name: "cnode-header"
  }
</script>

<style>
  .header{
    height:50px;
    width:100%;
    background-color: #444;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .tab-1{
    width:400px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    width:120px;
  }
  .search{
    position: relative;
  }
  .search input{
    border-radius: 20px;
    height:25px;
    outline: none;
    border:none;
    text-indent: 30px;
    width:250px;
    background-color: #888;
    transition: all linear 0.3s;
  }
  .search input:hover{
    background-color: #fff;
  }
  .search .search-icon{
    position: absolute;
    left:10px;
    top:50%;
    transform: translateY(-50%);
  }
  .tabs{
    cursor: default;
  }
  .tabs a{
    color:#ccc;
    text-decoration: none;
    margin: 0 10px;
    user-select: none;
  }
  .tabs a:hover{
    color:#fff;
  }
</style>
