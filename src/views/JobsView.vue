<template>
    <div>
        <p v-for="jobs in this.setJobsList">
            <a v-bind:href="jobs.url">{{ jobs.title }}</a>
            <small>{{ jobs.time_ago }}, {{ jobs.domain }}</small>
        </p>
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

<style>

</style>