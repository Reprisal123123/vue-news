import VueRouter from 'vue-router'
import Vue from 'vue'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView from '../views/AskView'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import { store } from '../store/index';

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
            name: 'news',
            // component : url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    next();
                })
                .catch(err => console.log(err));
                        
            },
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch(err => console.log(err));
                        
            },
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => next())
                .catch(err => console.log(err));
                        
            },
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ]
});