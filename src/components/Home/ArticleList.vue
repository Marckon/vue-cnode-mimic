<template>
  <div class="article-lsit">
    <div v-for="article in currentArticleList" class="article-list-item" :data-articleID="article.id">
      <div class="user-avatar">
        <img :src="article.author.avatar_url" alt="">
      </div>
      <div class="reply-collection">
        {{article.reply_count}}/{{article.visit_count}}
      </div>
      <div class="tab-tag" :class="{'top-tag':article.top||(article.good)}">
        <template v-if="article.top">
          置顶
        </template>
        <template v-else-if="article.good">
          精华
        </template>
        <template v-else>
          {{tabToCh(article.tab)}}
        </template>
      </div>
      <div class="title">
        {{article.title}}
      </div>
      <div class="last-reply-avatar">
        <img src="" alt="">
      </div>
      <div class="last-reply-text">
        {{transferDate(article.last_reply_at)}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "article-list",
    computed: {
      currentArticleList() {
        return this.$store.getters.getCurrentArticleList
      },
      lastReply() {
        return this.currentArticleList
      },

    },
    methods: {
      tabToCh(tabKey) {
        let res = ''
        switch (tabKey) {
          case 'all':
            res = '全部';
            break;
          case 'share':
            res = '分享';
            break;
          case 'job':
            res = '招聘';
            break;
          case 'dev':
            res = '测试';
            break
          case 'ask':
            res = '问答';
            break;
          default:
            res = '精华';
            break
        }
        return res;
      },
      transferDate(dateStr){
        let target=new Date(dateStr)
        let now=new Date()
        let diffYear=now.getFullYear()-target.getFullYear()
        if(diffYear>0){
          return diffYear+'年前'
        }
        let diffMonth=now.getMonth()-target.getMonth()
        if(diffMonth>0){
          return diffMonth+'月前'
        }
        let diffDate=now.getDate()-target.getDate()
        if(diffDate>0){
          return diffDate+'天前'
        }
        let diffHour=now.getHours()-target.getHours()
        if(diffHour>0){
          return diffHour+'小时前'
        }
        let diffMin=now.getMinutes()-target.getMinutes()
        if(diffMin>0){
          return diffMin+'分钟前'
        }
        let diffSec=now.getSeconds()-target.getSeconds()
        if(diffSec>0){
          return diffSec+'秒前'
        }else{
          return '刚刚'
        }
      }
    }
  }
</script>

<style scoped>
  .article-list-item {
    display: flex;
    height: 50px;
    width: 100%;
    background-color: #fff;
    border-bottom: #f0f0f0 solid 1px;
    align-items: center;
    justify-content: space-around;
    padding-left: 10px;
  }

  .article-list-item:hover{
    background-color: #f6f6f6;
  }
  .title:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
  }

  .user-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .reply-collection {
    width: 5%;
    overflow: hidden;
  }

  .title {
    width: 80%;
    display: flex;
    justify-content: start;
  }

  .tab-tag {
    color: #a3a3b9;
    background-color: #e5e5e5;
    border-radius: 2px;
    width: 3%;
  }

  .top-tag {
    color: #fff;
    background-color: #80bd01;
    border-radius: 2px;
    width: 3%;
  }
  .last-reply-text{
    font-size: 0.5rem;
    color:#bbb;
    width:5%;
  }
</style>
