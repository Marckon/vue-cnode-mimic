<template>
  <div class="get-start">
    <main-sector>
        <div class="topic_content">
          <div class="markdown-text"><h2>Node.js 入门</h2>
            <p>《<strong>汇智网 Node.js 课程</strong>》</p>
            <p><a href="http://www.hubwiz.com/course/?type=nodes" target="_blank">http://www.hubwiz.com/course/?type=nodes</a></p>
            <p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
            <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
            <p>《<strong>Node.js 包教不包会</strong>》</p>
            <p><a href="https://github.com/alsotang/node-lessons" target="_blank">https://github.com/alsotang/node-lessons</a></p>
            <p>《<strong>ECMAScript 6入门</strong>》</p>
            <p><a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></p>
            <p>《<strong>七天学会NodeJS</strong>》</p>
            <p><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank">https://github.com/nqdeng/7-days-nodejs</a></p>
            <p>《<strong>Node入门-<em>一本全面的Node.js教程</em></strong>》</p>
            <p><a href="http://www.nodebeginner.org/index-zh-cn.html" target="_blank">http://www.nodebeginner.org/index-zh-cn.html</a></p>
            <h2>Node.js 资源</h2>
            <p>《<strong>node weekly</strong>》</p>
            <p><a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a></p>
            <p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
            <p><a href="https://github.com/youyudehexie/node123" target="_blank">https://github.com/youyudehexie/node123</a></p>
            <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
            <p><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">https://github.com/sindresorhus/awesome-nodejs</a></p>
            <p>《<strong>Node.js Books</strong>》</p>
            <p><a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a></p>
            <h2>Node.js 名人</h2>
            <p>《<strong>名人堂</strong>》</p>
            <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
            <h2>Node.js 服务器</h2>
            <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
          </div>

        </div>
    </main-sector>
    <div class="inner topic">
    </div>
    <side-sector></side-sector>
  </div>
</template>

<script>
  import SideSector from '../SideSector'
  import MainSector from '../MainSectorCommon'

  export default {
    name: "get-start",
    components: {
      SideSector,
      MainSector,
    }
  }
</script>

<style>
.get-start{
  width: 80%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 2fr 0.5fr;
  grid-template-areas: "main-sector side-sector";
}
  .topic_content{
    background-color: #fff;
    min-height: 800px;
    text-align: left;
    padding-left: 20px;
    padding-top: 20px;
  }
  .topic_content h2{
    font-size: 2rem;
    margin: 10px;
  }
  .topic_content a{
    color: #0088cc;
    line-height: 2rem;
  }
  @media screen and (max-width:980px) {
    .get-start{
      display: block;
      width:90%;
    }
  }
</style>
