<template>
    <div>
        <p v-for="news in this.$store.state.news">
            <a v-bind:href="news.url">{{ news.title }}</a>
            <small>
                {{ news.time_ago }} by 
                <!-- <router-link v-bind:to="'/user/' + news.user">{{ news.user }}</router-link> -->
                <router-link v-bind:to="`/user/${news.user}`">{{ news.user }}</router-link>
            </small>
        </p>
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