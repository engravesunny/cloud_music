import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: '/home',
        component: ()=>import('@/view/Layout/index.vue'),
        children:[
            {
                path: '/home',
                name: 'home',
                component: ()=>import('@/view/Home/index.vue')
            },
            {
                path:"/search",
                name:'search',
                component: ()=>import('@/view/Search/index.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;