import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Qs from 'qs'

const instance = axios.create({
        baseURL: 'http://localhost/',
        timeout: 1000,
        paramsSerializer: function (params) {
            return Qs.stringify(params, {arrayFormat: 'brackets'})
        },
        // 指定允许其他域名访问  响应类型
        /*headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'x-requested-with, content-type'
        }*/
    })
;

Vue.prototype.$axios = instance;

// // 导入 MUI 的样式
import './assets/mui/css/mui.min.css'
// // 导入扩展图标样式
import './assets/mui/css/icons-extra.css'
// // 按需导入 Mint-UI 中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

import MintUI from 'mint-ui'

Vue.use(MintUI)
// 导入 mint-ui 的样式
import 'mint-ui/lib/style.css'

// 导入格式化时间的插件
import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

// 安装 图片预览插件
import VuePreview from 'vue-preview'

Vue.use(VuePreview)

import infiniteScroll from 'vue-infinite-scroll';

Vue.use(infiniteScroll)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
