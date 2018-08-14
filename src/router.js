import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from './views/HomeContainer'
import MemberContainer from './views/MemberContainer'
import SearchContainer from './views/SearchContainer'
import ShopcartContainer from "./views/ShopcartContainer"
import NewList from './components/news/NewsList'
import NewsInfo from './components/news/NewsInfo'
import PhotoList from './components/photos/PhotoList'
import PhotoInfo from './components/photos/PhotoInfo'
import GoodsList from './components/goods/GoodsList'
import GoodsInfo from './components/goods/GoodsInfo'
import GoodsDesc from './components/goods/GoodsDesc'
import GoodsComment from './components/goods/GoodsComment'

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
        {path: '/home/newslist', component:NewList},
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
        { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
        { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
