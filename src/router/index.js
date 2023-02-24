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
            },
            {
                path:"/findSong",
                name:'findSong',
                component: ()=>import('@/view/findSong/index.vue')
            },
            {
                path:"/myLike",
                name:'myLike',
                component: ()=>import('@/view/myLike/index.vue')
            },
            {
                path:"/suggestSong",
                name:'suggestSong',
                component: ()=>import('@/view/suggestSong/index.vue')
            },
            {
                path:"/privateFM",
                name:'privateFM',
                component: ()=>import('@/view/privateFM/index.vue')
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;