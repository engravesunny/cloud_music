import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: '/findSong',
        component: ()=>import('@/view/Layout/index.vue'),
        children:[
            {
                path:"/search",
                name:'search',
                component:()=>import('@/view/Home/index.vue'),
                meta:{
                    component:'Search'
                }
            },
            {
                path:"/findSong",
                name:'findSong',
                component:()=>import('@/view/Home/index.vue'),
                meta:{
                    component:'findSong'
                }
            },
            {
                path:"/myLike",
                name:'myLike',
                component:()=>import('@/view/Home/index.vue'),
                meta:{
                    component:'myLike'
                }
            },
            {
                path:"/suggestSong",
                name:'suggestSong',
                component:()=>import('@/view/Home/index.vue'),
                meta:{
                    component:'suggestSong'
                }
            },
            {
                path:"/privateFM",
                name:'privateFM',
                component:()=>import('@/view/Home/index.vue'),
                meta:{
                    component:'privateFM'
                }
            },
            {
                path:"/songList",
                name:'songList',
                component:()=>import('@/view/Home/index.vue'),
                meta:{
                    component:'songList'
                }
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;