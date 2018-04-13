<template>
  <div class="topic" ref="topic">
    <!--加上v-if防止报错-->
    <article-content :currentArticle="currentArticle" v-if="currentArticle"></article-content>
    <article-replies :currentArticleReplies="currentArticle.replies" v-if="currentArticle.replies"></article-replies>
    <side-sector></side-sector>
  </div>
</template>

<script>
  import ArticleContent from './ArticleContent'
  import SideSector from '../SideSector'
  import ArticleReplies from './ArticleReplies'

  export default {
    name: "topic",
    components:{
      ArticleContent,
      SideSector,
      ArticleReplies,
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
