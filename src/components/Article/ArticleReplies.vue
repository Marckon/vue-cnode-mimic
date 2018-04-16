<template>
    <div class="article-replies">
      <div class="top-bar">{{currentArticleReplies.length}}条评论</div>
    </div>
</template>

<script>
    export default {
        name: "article-replies",
        props:{
         currentArticleReplies:{
           required:true
         }
        }
    }
</script>

<style scoped>
  .article-replies{
    grid-area: article-replies;
  }
  .article-replies .top-bar{
    height:50px;
    background-color: #f6f6f6;
  }
</style>
