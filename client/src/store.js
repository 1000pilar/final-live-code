import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.store({
  state:{
    articles: []
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getArticles (state) {
      return state.articles
    }
  },
  mutations: {
    
  }
})
