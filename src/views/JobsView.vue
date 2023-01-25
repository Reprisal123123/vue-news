<template>
    <div>
        <ul class="jobs-list">
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
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            jobsList : [],
        }
    },

    created() {
        this.$store.dispatch('FETCH_JOBS');
        // fetchJobsList().
        // then(response => this.jobsList = response.data)
        // .catch(error => console.log(error))
    },

    computed: {
        setJobsList() {
            return this.$store.state.jobs;
        }
    },
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