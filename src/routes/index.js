import VueRouter from 'vue-router'
import Vue from 'vue'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView from '../views/AskView'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // 해시 제거
    routes : [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path : URL 주소
            path: '/news',
            // component : url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
    ]
});