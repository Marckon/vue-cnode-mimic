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
        <router-link :to="{name:'topic',params:{artID:article.id}}">{{article.title}}</router-link>
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
  import Util from '../../util/util'
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
      transferDate:Util.Util.transferDate
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
    flex-wrap: nowrap;
  }

  .article-list-item:hover{
    background-color: #f6f6f6;
  }
  .title a{
    text-decoration: none;
    color:#000;
  }
  .title a:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  .title a:visited{
    color:#aaa;
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
    align-items: center;
    height:100%;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tab-tag {
    color: #a3a3b9;
    background-color: #e5e5e5;
    border-radius: 2px;
    width: 3%;
    font-size: 0.8rem;
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
  @media screen and (max-width: 980px) {
    .tab-tag,.reply-collection,.last-reply-text{
      display: none;
    }
  }
</style>
