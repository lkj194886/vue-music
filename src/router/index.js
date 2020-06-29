import VueRouter from 'vue-router'

import HotComments from '@/components/tabbar/HotComments'

import My from '@/components/tabbar/My'

import rec from '@/components/tabbar/Recommendsonglist'

import search from '@/components/tabbar/Search'

import playlist from '@/page/playList'
import play from '@/page/play'
const routes = [{
        path: '/',
        component: rec
    },
    {
        path: '/rec',
        component: rec,
        name: "rec"
    },
    {
        path: '/search',
        component: search,
        name: "search"
    },
    {
        path: '/hotcomments',
        component: HotComments,
        name: "HotComments"
    },
    {
        path: '/my',
        component: My,
        name: "My"
    },
    {
        path: '/playlist/:id',
        component: playlist,
        name: "playlist"
    },
     {
        path: '/play/:id',
        component: play //播放页面
     }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: "mui-active"
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


export default router