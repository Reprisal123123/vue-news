<template>
    <div>
        <ul class="news-list">
            <li v-for="news in this.$store.state.news" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ news.points }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <a v-bind:href="news.url">
                            {{ news.title }}
                        </a>
                    </p>
                    <small class="link-text">
                        by
                        <router-link v-bind:to="`/user/${news.user}`" class="link-text">{{ news.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
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

<style scoped>
    .news-list {
        margin: 0;
        padding: 0;
    }

    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }

    .points {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #42b883;
    }

    .news-title {
        margin: 0;
    }

    .link-text {
        color: #828282;
    }
</style>