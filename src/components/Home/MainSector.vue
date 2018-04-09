<template>
  <div class="main-sector">
    <article-tab></article-tab>
    <article-list></article-list>
    <page></page>
  </div>
</template>

<script>
  import ArticleTab from './ArticleTab'
  import ArticleList from './ArticleList'
  import Page from './Page'
  export default {
    name: "main-sector",
    components: {
      ArticleTab,
      ArticleList,
      Page
    }
  }
</script>

<style scoped>
.main-sector{
  width:1100px;
}
</style>
