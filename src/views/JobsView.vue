<template>
    <div>
        <!-- <ul class="jobs-list">
            <li v-for="jobs in this.setJobsList" class="post">
                <div class="points">
                    {{ jobs.points || 0 }}
                </div>
                <div>
                    <p class="jobs-title">
                        <a v-bind:href="jobs.url">{{ jobs.title }}</a>
                    </p>
                    <small class="link-text">
                        {{ jobs.time_ago }} by
                        <a v-bind:href="jobs.url">{{ jobs.domain }}</a>
                    </small>
                </div>
            </li>
        </ul> -->
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus'
import ListMixin from '@/mixins/ListMixin';

export default {
    components : {
        ListItem,
    },
    mixins : [ListMixin],
    data() {
        return {
            jobsList : [],
        }
    },

    created() {
        // bus.$emit('start:spinner');
        // setTimeout(() => {
        //     this.$store.dispatch('FETCH_JOBS')
        //     .then(() => {
        //         bus.$emit('end:spinner');
        //     })
        //     .catch(err => console.log(err));
        // }, 3000);
    },

    computed: {
        setJobsList() {
            return this.$store.state.jobs;
        }
    },
    mounted() {
        bus.$emit('end:spinner');
    }
}
</script>

<style scoped>
    .jobs-list {
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

    .jobs-title {
        margin: 0;
    }

    .link-text {
        color: #828282;
    }
</style>