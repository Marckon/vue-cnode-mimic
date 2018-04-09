<template>
  <div id="app" ref="app">
    <cnode-header></cnode-header>
    <router-view></router-view>
    <cnode-footer></cnode-footer>
    <scroll-top-btn v-show="currentScrollTop>10"></scroll-top-btn>
  </div>
</template>

<script>
  import CnodeHeader from './components/CnodeHeader'
  import CnodeFooter from './components/CnodeFooter'
  import ScrollTopBtn from './components/ScrollTopBtn'

  export default {
    name: 'App',
    components: {
      CnodeHeader,
      CnodeFooter,
      ScrollTopBtn,
    },
    /*data: function () {
      return {
        appVm:''
      }
    },*/
    computed:{
      currentScrollTop(){
        console.log(this.$refs.app)
        if(this.$refs.app){
          console.log(this.$refs.app.scrollTop)
          return this.$refs.app.offsetTop
        }else {
          console.log('no-com')
          return 0
        }
      }
    },
    mounted(){
      this.data.appVm=this.$refs.app
      console.log(this.$refs.app)
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 11pt;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background-color: #e1e1e1;

  }
</style>
