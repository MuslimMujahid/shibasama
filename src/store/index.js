import Vuex from 'vuex'
import Vue from 'vue'
import AnimeList from './modules/AnimeList'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
    modules: {
        AnimeList
    }
})