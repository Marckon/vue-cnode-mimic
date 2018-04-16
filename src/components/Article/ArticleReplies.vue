<template>
    <div class="article-replies">
      <div class="top-bar">{{currentArticleReplies.length}} 回复</div>
      <template v-for="(reply,index) in currentArticleReplies">
        <div class="reply-item" :data-replyID="reply.id">
          <div class="avatar">
            <img :src="reply.author.avatar_url" alt="" width="30px" height="30px" style="border-radius: 5px">
          </div>
          <div class="info">
            <a class="author-name" href="#">{{reply.author.loginname}}</a>
            <span class="floor">{{index+1}}楼</span>
            <span class="reply-date">	&bull;{{transferDate(reply.create_at)}}</span>
            <span v-if="reply.author.loginname===articleAuthor" class="same-author">作者</span>
          </div>
          <div class="content">
            <div v-html="reply.content"></div>
          </div>
          <div class="thumb-up">
            <div class="icon-like">{{reply.ups.length}}</div>
          </div>
        </div>
      </template>
    </div>
</template>

<script>
    export default {
        name: "article-replies",
        props:{
         currentArticleReplies:{
           required:true
         },
          articleAuthor:{
           required:true
          }
        },
      methods:{
          transferDate(str){
            return this.$util.transferDate(str)
          }
      }
    }
</script>

<style>
  .article-replies{
    grid-area: article-replies;
    width:100%;
  }
  .article-replies .top-bar{
    height:50px;
    background-color: #f6f6f6;
    line-height: 50px;
    text-align: left;
    padding-left: 20px;
  }
  .article-replies .reply-item{
    width:100%;
    min-height:80px;
    display: grid;
    grid-template-rows: 30px 2fr;
    grid-template-columns: 1fr 100fr 3fr;
    grid-template-areas: "ri-avatar ri-info ri-thumb"
                          "ri-avatar ri-content ri-thumb";
    background-color: #fff;
    border-bottom: #eee solid 1px;
  }
  /*头像栏*/
  .article-replies .reply-item .avatar{
    grid-area: ri-avatar;
    margin: 5px 10px auto 5px;
  }
  /*信息栏*/
  .article-replies .reply-item .info{
    display: flex;
    grid-area: ri-info;
    justify-items: start;
    align-items: center;
  }
  .article-replies .reply-item .info a,span{
    margin-right: 5px;
    font-size: 0.5em;
    color:#08c;
  }
  .article-replies .reply-item .info .author-name{
    text-decoration: none;
    color: #66667f;
    font-weight: bold;
  }
  .article-replies .reply-item .info .same-author{
    background-color: #6ba44e;
    color:#fff;
    padding: 2px;
  }
  /*内容栏*/
  .article-replies .reply-item .content{
    grid-area: ri-content;
    display: flex;
    justify-items: start;
    align-items: center;
  }
  .article-replies .reply-item .content .markdown-text{
    text-align: left;
    padding: 5px;
  }
  /*点赞栏*/
  .article-replies .reply-item .thumb-up{
    grid-area: ri-thumb;
    margin:20px 5px auto auto;
    cursor: pointer;
    transition: linear .3s;
  }
  .article-replies .reply-item .thumb-up:hover{
    text-shadow: 0 0 5px #f6f6f6;
  }
</style>
