import { createRouter, createWebHashHistory } from 'vue-router';
import Authors from '../views/Authors';

const routes = [
    {
        path: '/',
        name: 'App',
        redirect: 'authors'
    },
    {
        path: '/authors',
        name: 'authors',
        component: Authors
    },
    {
        path: '/books',
        name: 'books',
        component: () => import('../views/Books.vue')
    }    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;





