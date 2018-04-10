<template>
  <div class="article-content">
    <div class="title">
      <h1>{{currentArticle.title}}</h1>
      <div class="article-info">
        <span>发布于</span>
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
