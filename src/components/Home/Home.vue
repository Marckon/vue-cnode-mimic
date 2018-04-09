<template>
  <div class="home">
    <main-sector></main-sector>
  </div>
</template>

<script>
  import MainSector from './MainSector'

  export default {
    name: "home",
    components: {
      MainSector
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
  justify-content: center;
  align-items: start;
  padding-top: 20px;
}
</style>
