<template>
  <div id="app" >
    <cnode-header></cnode-header>
    <router-view></router-view>
    <cnode-footer></cnode-footer>
    <transition name="fade">
      <scroll-top-btn v-show="scrollY>20"></scroll-top-btn>
    </transition>
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
    data(){
      return{
        scrollY:window.scrollY,
      }
    },
    methods:{
      scrollMethod(){
        this.$data.scrollY=window.scrollY
      }
    },
   computed:{
   },
    mounted(){
      /*防止抖动：连续scroll短时间内触发过多次事件*/
      function debounce(fn,delay) {
        let timer=null
        return function () {
          let context=this
          let args=arguments

          clearTimeout(timer)
          timer=setTimeout(function () {
            fn.apply(context,args)
          },delay)
        }
      }
      window.addEventListener('scroll',debounce(this.scrollMethod,500))
    },

  }
</script>

<style>
  @import "assets/style.css";
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0.8vmax;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: absolute;
    bottom:0;
    top:0;
    display: grid;
    grid-template-rows:auto auto 60px;
  }

  body {
    background-color: #e1e1e1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
