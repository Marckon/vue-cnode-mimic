<template>
  <div class="side-login">
    <h3>Cnode:刘丞哲仿站</h3>
    <p>您可以
      <router-link to="/signin">登录</router-link>
      或
      <router-link to="/register">注册</router-link>
      ，也可以
    </p>
    <button>通过GitHub登录</button>
  </div>
</template>

<script>
  export default {
    name: "side-login"
  }
</script>

<style scoped>
  .side-login {
    height: 100px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    padding-left: 10px;
    width:100%;
  }

  .side-login button {
    background-color: #5bc0de;
    color:#fff;
    border: none;
    padding: 8px;
    border-radius: 5px;
    letter-spacing: 2px;
    outline: none;
    cursor: pointer;
    transition: linear 0.3s;
  }
  .side-login button:hover{
    background-color: #2f96b4;
  }
</style>
