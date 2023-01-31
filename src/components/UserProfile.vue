<template>
    <div class="user-container">
        <div>
            <i class="far fa-user"></i>
        </div>
        <div class="user-description">
            <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <div class="time">
                <slot name="time">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <slot name="karma">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
            </div>
        </div>
    </div>
</template>
<!-- import { mapGetters } from 'vuex';

export default {
    computed: {
        // return this.$store.state.item;
        ...mapGetters(['fetchedItem']),
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', id);
    },
} -->
<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        },
    }
}
</script>

<style scoped>
    .user-container {
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }

    .fa-user {
        font-size: 2.5rem;
    }

    .user-description {
        padding-left: 8px;
    }

    .time {
        font-size: 0.7rem;
    }
</style>