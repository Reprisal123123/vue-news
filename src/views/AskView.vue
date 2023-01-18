<template>
    <div>
        <div v-for="ask in askList">
            {{ ask.title }}
        </div>
    </div>
</template>

<script>
import { fetchAskList } from '@/api';

export default {
    data() {
        return {
            askList: [],
        }
    },

    // 보통 데이터를 가져올 때는 created나 mounted에서 함
    created() {
        fetchAskList().
        then(response => this.askList = response.data)
        .catch(error => console.log(error));
    }
}
</script>

<style>

</style>