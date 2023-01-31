<template>
    <div>
        <!-- <p v-for="ask in fetchedAsk">
            <router-link v-bind:to="`item/${ask.id}`">{{ ask.title }}</router-link>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
        </p> -->
        <!-- <ul class="asks-list">
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
        </ul> -->
        <list-item></list-item>
    </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue'

export default {
    // computed: {
    //     // ask() {
    //     //     // return this.$store.state.ask;
    //     // }
    //     // ...mapState({
    //     //     asks: state => state.asks
    //     // }),
    //     // ...mapGetters({
    //     //     asks : 'fetchedAsk'
    //     // })
    //     ...mapGetters(['fetchedAsk'])
    // },

    // 보통 데이터를 가져올 때는 created나 mounted에서 함
    created() {
        this.$store.dispatch('FETCH_ASKS');
    },
    components : {
        ListItem,
    }
}
</script>

<style scoped>

</style>