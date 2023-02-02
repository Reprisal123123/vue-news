import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {},
        item: {},
        list: [],
    },
    // mutations: {
    //     // mutations: mutations,
    //     ...mutations,
    // },
    getters: {
        fetchedAsk(state) {
            return state.asks;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    // actions: {
    //     ...actions,
    // }
    mutations,
    actions,
})