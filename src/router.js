import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from './views/tabbar/HomeContainer'
import MemberContainer from './views/tabbar/MemberContainer'
import SearchContainer from './views/tabbar/SearchContainer'
import ShopcartContainer from "./views/tabbar/ShopcartContainer"
import NewList from './components/news/NewsList'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path:'/', redirect:'/home'},
        {path:'/home', component: HomeContainer},
        {path:'/member', component: MemberContainer},
        {path:'/search', component: SearchContainer},
        {path:'/shopcart', component: ShopcartContainer},
        {path: '/home/newslist', component:NewList}
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
