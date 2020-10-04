import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Vue from 'vue'

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
        }
    ],
    linkActiveClass: 'active'
})

export default router