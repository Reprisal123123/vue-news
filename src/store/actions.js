import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index';


export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(response => {
    //         context.commit('SET_NEWS', response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //     .then(({ data }) => {
    //         commit('SET_JOBS', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList(); // await를 붙이면 프로미스를 반환함
            commit('SET_JOBS', response.data);
            return response;
        } catch(error) {
            console.log(error);
        }
    },

    // FETCH_ASKS({ commit }) {
    //     return fetchAskList()
    //     .then(({ data }) => {
    //         commit('SET_ASKS', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    async FETCH_ASKS({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASKS', response.data);
        return response;
    },

    // FETCH_USER({ commit }, userName) {
    //     return fetchUserInfo(userName)
    //     .then(({ data }) => {
    //         commit(('SET_USER'), data);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
    // },
    async FETCH_USER({ commit }, userName) {
        const response = await fetchUserInfo(userName);
        commit(('SET_USER'), response.data);
        return response;
    },

    // FETCH_ITEM({ commit }, id) {
    //     return fetchItemInfo(id)
    //     .then(({ data }) => {
    //         commit(('SET_ITEM'), data);
    //     })
    //     .catch(error => console.log(error));
    // },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchItemInfo(id);
        commit(('SET_ITEM'), response.data);
        return response;
    },

    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit(('SET_LIST'), response.data);
        return response;
    },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //     .then(({ data }) => {
    //         commit(('SET_LIST'), data);
    //     })
    //     .catch(error => console.log(error));
    // }
}