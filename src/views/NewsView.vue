<template>
    <div>
        <div v-for="news in this.$store.state.news">
            {{ news.title }}
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            newsList: []
        }
    },

    created() {
        this.$store.dispatch('FETCH_NEWS');
    //     fetchNewsList() // new Promise를 반환
    //     .then(response => this.newsList = response.data)
    //     .catch(error => console.log(error))
    },
}
</script>

<style>

</style>