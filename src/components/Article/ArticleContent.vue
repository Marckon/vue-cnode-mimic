<template>
  <div class="article-content">
    <div class="title">
      <h1>{{currentArticle.title}}</h1>
      <div class="article-info">
        <span>发布于 {{transferDate(currentArticle.create_at)}}</span>
        <span>作者 {{currentArticle.author.loginname}}</span>
        <span>{{currentArticle.visit_count}} 次浏览</span>
        <span>来自 {{transferTab(currentArticle.tab)}}</span>
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
      },
      transferTab(tabkey){
        return this.$util.transferTab(tabkey)
      }
    },
  }
</script>

<style>
  .article-content{
    grid-area: article-content;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-content: start;
  }
  .article-content .content{
    width: 80%;
    margin:15px auto auto 15px;
    text-align: left;
  }
  .article-content .content ol{
    list-style-position: inside;
  }
  .article-content .content img{
    max-width: 100%;
    max-height: 100%;
    margin: 2em auto;
  }
  .article-content .content p{
    line-height: 2em;
  }
  .article-content .content blockquote{
    border-left: 5px solid #eee;
    padding-left: 15px;
    margin-bottom: 20px;
    color:#d1918f;
  }
  .article-content .title {
    height: 100px;
    width:100%;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    border-bottom: #ccc solid 1px;
    padding-left: 20px;
  }

  .article-content .title h1 {
    font-size: 1.8em;
    height:10px;
    width:100%;
  }
  .article-content .article-info span:before{
    content:'•';
  }
  @media screen and (max-width: 980px) {
    .article-content{
      width:100%;
    }
  }
</style>
