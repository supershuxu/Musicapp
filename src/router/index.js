import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/find'
        },
        {
            path: '/find',
            name: 'Find',
            component: () => import("../views/Find/index.vue")
        },
        {
            path: '/mine',
            name: 'Mine',
            component: () => import("../views/Mine/index.vue")
        },
        {
            path: '/video',
            name: 'Video',
            component: () => import("../views/Video/index.vue")
        },
        {
            path: '/yun',
            name: 'Yun',
            component: () => import("../views/Yun/index.vue")
        },
        {
            path: '/songdetails/:id',
            name: 'Songdetails',
            component: () => import("../views/Songdetails/index.vue")
        },
        {
            path: '/sonnlist',
            name: 'Sonnlist',
            component: () => import("../views/Sonnlist/index.vue")
        }
    ],
    linkActiveClass: 'active'
})

export default router