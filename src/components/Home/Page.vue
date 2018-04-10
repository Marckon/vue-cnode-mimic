<template>
  <div class="page">
    <div class="btns">
      <a class="page-first page-block" href="#" @click="toFirstPage">《</a>
      <a class="more-page page-block" v-if="currentPage>3">...</a>
      <div v-for="showingPage in showPage">
        <a class="page-block" href="#" v-if="showingPage<=maxPage" @click="toPage(showingPage)" :class="{'current-page-block':showingPage===currentPage}">{{showingPage}}</a>
      </div>
      <a class="more-page page-block" v-if="currentPage<91">...</a>
      <a class="page-last page-block" href="#" @click="toLastPage">》</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "page",
    computed: {
      currentTab(){
        return this.$store.getters.getCurrentTab
      },
      currentPage() {
        return this.$store.getters.getCurrentPage
      },
      maxPage(){
        return this.$store.getters.getMaxPage
      },
      showPage(){
        let curPage=this.currentPage
        if(curPage<4){
          return [1,2,3,4,5]
        }else{
          return [curPage-2,curPage-1,curPage,curPage+1,curPage+2]
        }
      }
    },
    methods:{
      toFirstPage(){
        this.$store.commit('setCurrentPage',1)
        this.$store.commit('setCurrentArticleList')
      },
      toLastPage(){
        this.$store.commit('setCurrentPage',94)
        this.$store.commit('setCurrentArticleList')

      },
      toPage(page){
        this.$store.commit('setCurrentPage',page)
        this.$store.commit('setCurrentArticleList')

      }
    }
  }
</script>

<style scoped>
  .page{
    width:100%;
    background-color: #fff;
    display: flex;
    cursor: default;
    user-select: none;
  }
.btns{
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: #ddd solid 1px;
  border-radius: 5px;
  margin: 20px;

}
  .page-block{
    width:40px;
    height:35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:solid #ddd 1px;
    border-left-width:0;
    border-top-width:0;
    border-bottom-width:0;
    text-decoration: none;
    color: #8e8e8e;
  }
  .page-last{
    border-right-width: 0;
  }
  .current-page-block{
    color:orange;
  }
</style>
