import VueRouter from 'vue-router'

import HotComments from '@/components/tabbar/HotComments'

import My from '@/components/tabbar/My'

import rec from '@/components/tabbar/Recommendsonglist'

import search from '@/components/tabbar/Search'



const routes= [
    {
        path: '/',
        component:rec
    },
    {
        path: '/rec',
        component: rec,
        name:"rec"
    },
    {
        path: '/search',
        component: search,
        name:"search"
    },
    {
        path: '/hotcomments',
        component:HotComments,
        name:"HotComments"
    },
    {
        path: '/my',
        component:My,
        name:"My"
    }
]

const router = new VueRouter({
    mode:'history',
    routes,
    linkActiveClass: "mui-active"
})

export default router