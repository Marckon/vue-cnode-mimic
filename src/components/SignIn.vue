<template>
  <div class="sign-in">
    <h1>正在一键登陆中，请稍等</h1>
    <div class="wait-ico icon-wait" v-if="waiting"></div>
    <div v-if="user" class="name">你好，{{user.loginname}}</div>
  </div>
</template>

<script>
  export default {
    name: "sign-in",
    data(){
      return{
        waiting:true,
        user:this.$store.getters.getLoginUser
      }
    },
    mounted() {
      var vm = this
      /*模拟网速慢的过程以展示等待动画*/
      var st=setTimeout(function () {
        vm.$http.post('/accesstoken',{
          accesstoken:'927ea215-c5d4-4e95-bfcf-f9a172d964c2'
        }).then((res)=>{
          vm.$store.commit('setLoginUser',res.data)
          vm.$data.waiting=false
          vm.$data.user=vm.$store.getters.getLoginUser
          console.log(vm.$store.getters.getLoginUser.loginname)
        })
      },1000)

    }
  }
</script>

<style>
  .sign-in {
    width: 500px;
    height: 500px;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 20px;
    flex-wrap: wrap;
  }

  .sign-in h1 {
    font-size: 2em;
  }

  .sign-in .wait-ico {
    font-size: 3em !important;
    width: 100%;
    margin-top: 100px;
    animation: waiting infinite ease 2s;
  }
  .sign-in .name{
    font-size: 2em;
    margin-top: 100px;
    width: 100%;
  }

  @keyframes waiting {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
