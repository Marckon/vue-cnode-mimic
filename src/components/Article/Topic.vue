<template>
  <div class="topic" ref="topic">
    <article-content :currentArticle="currentArticle"></article-content>
    <side-sector></side-sector>
  </div>
</template>

<script>
  import ArticleContent from './ArticleContent'
  import SideSector from '../SideSector'

  export default {
    name: "topic",
    components:{
      ArticleContent,
      SideSector,
    },
    data() {
      return {
        currentArticle: ''
      }
    },
    beforeCreate() {
      let vm = this
      let articleID = vm.$route.params.artID
      this.$http.get(`/topic/${articleID}`).then(
        (res) => {
          vm.$data.currentArticle = res.data.data
        }
      )
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .topic{
    display: flex;
    padding-top: 20px;
    width: 80%;
    margin:0 auto;
  }
  @media screen and (max-width: 980px) {
    .topic{
      width:100%;
    }
  }
</style>
