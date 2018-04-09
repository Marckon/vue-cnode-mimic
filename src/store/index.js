import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const store = new Vuex.Store({
  state: {
    totalPage: 94,
    currentPage: 1,
    currentTab: 'all',
    currentArticleList: [],
  },
  mutations: {
    setCurrentPage: (state, curP) => state.currentPage = curP,
    setCurrentTab: (state, curT) => state.currentTab = curT,
    setCurrentArticleList: (state, tabKey = state.currentTab, page = state.currentPage) => {
      axios.get('/topics', {
        params: {
          tab: tabKey,
          page: page
        }
      }).then(
        (res) => {
          state.currentArticleList = res.data.data;
          console.log(res.data.data)
        }
      )
    },
  },
  getters: {
    getCurrentPage: (state) => state.currentPage,
    getMaxPage: (state) => state.totalPage,
    getCurrentTab: (state) => state.currentTab,
    getCurrentArticleList: (state) => state.currentArticleList
  }
})

export default store
