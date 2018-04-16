<template>
  <div class="topic" ref="topic">
    <!--加上v-if防止报错-->
    <article-content :currentArticle="currentArticle" v-if="currentArticle"></article-content>
    <article-replies :currentArticleReplies="currentArticle.replies" :articleAuthor="currentArticle.author.loginname"
                     v-if="currentArticle.replies"></article-replies>
    <side-sector>
      <div class="side-author">
        <div class="top-bar">作者</div>
        <div class="author-info">
          <img :src="author.avatar_url" width="60px" height="60px" class="avatar">
          <p class="name">{{author.loginname}}</p>
          <p class="score">积分：{{author.score}}</p>
          <p style="font-style: italic" class="profile">" 这个家伙很懒，什么简介也没有写 "</p>
        </div>
      </div>
    </side-sector>
  </div>
</template>

<script>
  import ArticleContent from './ArticleContent'
  import SideSector from '../SideSector'
  import ArticleReplies from './ArticleReplies'

  export default {
    name: "topic",
    components: {
      ArticleContent,
      SideSector,
      ArticleReplies,
    },
    data() {
      return {
        currentArticle: '',
        author:'',
      }
    },
    beforeCreate() {
      let vm = this
      let articleID = vm.$route.params.artID
      vm.$http.get(`/topic/${articleID}`)
        .then(
          (res) => {
            vm.$data.currentArticle = res.data.data
            /*获取作者信息*/
            vm.$http.get(`/user/${res.data.data.author.loginname}`).then(
              (author_res)=>{
                vm.$data.author=author_res.data.data
              }
            )
          }
        )
    },
    mounted() {
    }
  }
</script>

<style>
  .topic {
    display: grid;
    grid-template-columns: [col-start] 2fr [side-start] 0.5fr [col-end];
    grid-template-rows: [row-start] auto [reply-start] auto [row-end];
    grid-template-areas: "article-content side-sector" "article-replies side-sector";
    grid-row-gap: 20px;
    padding-top: 20px;
    width: 80%;
    margin: 0 auto;
  }
  /*作者侧边栏*/
  .topic .side-author{
    width:100%;
  }
  .topic .side-author .top-bar{
    height:30px;
    background-color: #f6f6f6;
    width:100%;
  }
  .topic .side-author .author-info{
    background-color: #fff;
    margin-bottom: 10px;
    padding: 20px;
    display: grid;
    justify-items: start;
    grid-row-gap: 10px;
    grid-template-columns: 1fr 6fr;
    align-items: center;
    grid-template-areas: "avatar name" "score score" "profile profile";
  }
  .topic .side-author .name{
    grid-area:name;
    padding-left: 20px;
    color:#aaa;
  }
  .topic .side-author .score{
    grid-area: score;
  }
  .topic .side-author .profile{
    grid-area: profile;
  }
  .topic .side-author .avatar{
    grid-area: avatar;
  }

  @media screen and (max-width: 980px) {
    .topic {
      width: 100%;
    }
  }
</style>
