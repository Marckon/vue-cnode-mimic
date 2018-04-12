<template>
  <div class="article-content">
    <div class="title">
      <h1>{{currentArticle.title}}</h1>
      <div class="article-info">
        <span>发布于 {{transferDate(currentArticle.create_at)}}</span>
        <span>作者 {{currentArticle.author.loginname}}</span>
        <span>{{currentArticle.visit_count}} 次浏览</span>
        <span>来自 {{currentArticle.tab}}</span>
      </div>
    </div>
    <div v-html="currentArticle.content" class="content"></div>
  </div>
</template>

<script>
  export default {
    name: "article-content",
    props: {
      currentArticle: {
        required: true
      }
    },
    methods:{
      transferDate(str){
        return this.$util.transferDate(str)
      }
    }
  }
</script>

<style scoped>
  .article-content{
    background-color: #fff;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
  .title {
    height: 100px;
    width:100%;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    border-bottom: #ccc solid 1px;
  }

  .title h1 {
    font-size: 1.8rem;
    height:10px;
  }
  .content{
    width: 80%;
    margin-left: 5%;
    text-align: left;
  }
  .content p{
   margin-top: 10px;
  }
  @media screen and (max-width: 980px) {
    .article-content{
      width:100%;
    }
  }
</style>
