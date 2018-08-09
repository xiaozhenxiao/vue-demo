import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import Mint from 'mint-ui'

Vue.use(Mint)

Vue.prototype.$axios = Axios;
// 导入 mint-ui 的样式
import 'mint-ui/lib/style.css'
// // 导入 MUI 的样式
import './assets/mui/css/mui.min.css'
// // 导入扩展图标样式
import './assets/mui/css/icons-extra.css'
// // 按需导入 Mint-UI 中的组件
// import { Header, Swipe, SwipeItem } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
