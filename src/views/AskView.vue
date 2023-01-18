<template>
    <div>
        <div v-for="asks in this.$store.state.asks">
            {{ asks.title }}
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            askList: [],
        }
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