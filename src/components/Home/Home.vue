<template>
  <div class="home">
    <main-sector></main-sector>
    <side-sector></side-sector>
  </div>
</template>

<script>
  import MainSector from './MainSector'
  import SideSector from '../SideSector'

  export default {
    name: "home",
    components: {
      MainSector,
      SideSector,
    },
    created(){
      let currentTab=this.$store.getters.getCurrentTab
      let currentPage=this.$store.getters.getCurrentPage
      /*let vm=this
      this.$http.get('/topics',{
        params:{
          tab:currentTab,
          page:currentPage,
        }
      }).then(
        (res)=>vm.$store.commit('setCurrentArticleList',res.data.data)
      ).then(()=>
        console.log(vm.$store.getters.getCurrentArticleList)
      )*/
      this.$store.commit('setCurrentArticleList',currentTab,currentPage)
    }
  }
</script>

<style scoped>
.home{
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding-top: 20px;
  width:80%;
  margin: 0 auto;
}
@media screen and (max-width: 980px) {
  .home{
    width:100%;
  }
}
</style>
