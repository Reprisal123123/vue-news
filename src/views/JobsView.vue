<template>
    <div>
        <div v-for="jobs in this.setJobsList">
            {{ jobs.title }}
        </div>
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