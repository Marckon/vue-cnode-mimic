<template>
  <div class="article-tab">
    <template v-for="tab in tabs">
      <a @click="setTab(tab.tabKey)" :class="{'tab-focus':tab.tabKey===currentTab}">{{tab.tabName}}</a>
    </template>
  </div>
</template>

<script>
  export default {
    name: "article-tab",
    data() {
      return {
        tabs: [
          {
            tabName: '全部',
            tabKey: 'all'
          },
          {
            tabName: '精华',
            tabKey: 'good'
          },
          {
            tabName: '分享',
            tabKey: 'share'
          },
          {
            tabName: '问答',
            tabKey: 'ask'
          },
          {
            tabName: '招聘',
            tabKey: 'job'
          },
          {
            tabName: '客户端测试',
            tabKey: 'dev'
          }
        ],
      }
    },
    computed: {
      currentTab() {
        return this.$store.getters.getCurrentTab
      }
    },
    methods:{
      setTab(tabKey){
        this.$store.commit('setCurrentTab',tabKey)
        this.$store.commit('setCurrentArticleList',tabKey)
      }
    },
    created() {
      console.log(this.currentTab)
    }
  }
</script>

<style scoped>
  .article-tab {
    display: flex;
    width: 100%;
    background-color: #f6f6f6;
    justify-content: start;
    align-items: center;
    height: 40px;
    border-radius: 2px;
  }

  .article-tab a {
    color: #9fbd50;
    text-decoration: none;
    margin-left: 20px;
    padding: 3px;
    user-select: none;
    cursor: pointer;
  }

  .article-tab a:hover {
    color: #7f559f;
  }

  .tab-focus {
    color: #fff!important;
    background-color: #80bd01;
    border-radius: 3px;
  }
</style>
