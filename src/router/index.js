import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import ReleasesPage from '../components/ReleasesPage.vue'; 

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/releases',
        name: 'releases',
        component: ReleasesPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
