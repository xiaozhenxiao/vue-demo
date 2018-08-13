<template>
    <div>
        <!-- 轮播图 -->
        <swiper :lunbotuList="lunbotuList"></swiper>

        <!-- 九宫格 到 6宫格 的改造工程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../assets/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../assets/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../assets/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a></li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import swiper from '../components/common/swiper'

    export default {
        name: "Home",
        data() {
            return {
                lunbotuList: {}
            };
        },
        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu() {
                this.$axios
                    .get('http://47.89.21.179:8080/api/getlunbo')
                    .then(response => {
                        if (response.data.status === 0) {
                            this.lunbotuList = response.data.message;
                        }
                    })
                    .catch(response => {
                        // console.log("error: " + response)
                        Toast('获取轮播图失败！')
                    });
            }
        },
        components: {
            swiper
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }

    .mint-swipe img {
        width: 100%;
        height: 100%;
    }

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
    }

    .mui-grid-view.mui-grid-9 img {
        width: 60px;
        height: 60px;
    }

    .mui-grid-view.mui-grid-9.mui-media-body {
        font-size: 13px;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }

    .mui-col-sm-3 {
        width: 33.33333333%;
    }
</style>