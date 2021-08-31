import { createRouter, createWebHashHistory } from 'vue-router';
import Authors from '../views/Authors';


const routes = [
    {
        path: '/Authors',
        name: 'Athors',
        component: Authors
    },
    {
        path: '/Books',
        name: 'Books',
        component: () => import('../views/Books.vue')
    }    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;





