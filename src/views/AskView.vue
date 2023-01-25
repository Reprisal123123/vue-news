<template>
    <div>
        <!-- <p v-for="ask in fetchedAsk">
            <router-link v-bind:to="`item/${ask.id}`">{{ ask.title }}</router-link>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
        </p> -->
        <ul class="asks-list">
            <li v-for="ask in fetchedAsk" class="post">
                <div class="points">
                    {{ ask.points }}
                </div>
                <div>
                    <p class="ask-title">
                        <router-link v-bind:to="`item/${ask.id}`">
                            {{ ask.title }}
                        </router-link>
                    </p>
                    <small class="link-text">
                        by
                        <router-link v-bind:to="`/user/${ask.user}`" class="link-text">{{ ask.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    data() {
        return {
            askList: [],
        }
    },
    computed: {
        // ask() {
        //     // return this.$store.state.ask;
        // }
        // ...mapState({
        //     asks: state => state.asks
        // }),
        // ...mapGetters({
        //     asks : 'fetchedAsk'
        // })
        ...mapGetters(['fetchedAsk'])
    },

    // 보통 데이터를 가져올 때는 created나 mounted에서 함
    created() {
        this.$store.dispatch('FETCH_ASKS');
        // fetchAskList().
        // then(response => this.askList = response.data)
        // .catch(error => console.log(error));
    }
}
</script>

<style scoped>
    .asks-list {
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

    .ask-title {
        margin: 0;
    }

    .link-text {
        color: #828282;
    }
</style>