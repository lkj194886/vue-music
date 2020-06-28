import VueRouter from 'vue-router'

import HotComments from '../components/tabbar/HotComments.vue'

import My from '../components/tabbar/My.vue'

import rec from '../components/tabbar/Recommendsonglist.vue'

import search from '../components/tabbar/Search.vue'

const router = new VueRouter({
    routes: [{
            path: '/rec',
            component: rec
        },
        {
            path: '/serch',
            component: search
        },
        {
            path: '/hotcomments',
            component: HotComments
        },
        {
            path: '/my',
            component: My
        }
    ],
    linkActiveClass: "mui-active"
})

export default router