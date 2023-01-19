<template>
    <div>
        <p v-for="ask in fetchedAsk">
            <a v-bind:href="ask.url">{{ ask.title }}</a>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
        </p>
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

<style>

</style>