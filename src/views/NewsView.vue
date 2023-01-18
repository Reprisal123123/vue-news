<template>
    <div>
        <div v-for="news in newsList">
            {{ news.title }}
        </div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index';

export default {
    data() {
        return {
            newsList: []
        }
    },

    created() {
        
        fetchNewsList() // new Promise를 반환
        .then(response => this.newsList = response.data)
        .catch(error => console.log(error))
    },
}
</script>

<style>

</style>