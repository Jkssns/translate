import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from 'vue-router'

export const routes:any = [
    {
        path: '/',
        redirect: '/svg-view',
    },
    {
        path: '/svg-view',
        component: () => import('@/views/svg-view.vue'),
    },
    {
        path: '/translate',
        component: () => import('@/views/translate.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     return {
    //       el: document.getElementById('globalContainer'),
    //       top: 0,
    //     }
    // },
})


export default router
