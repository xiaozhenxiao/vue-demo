<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
        <vue-preview :slides="list" @close="handleClose"></vue-preview>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    // 1. 导入评论子组件
    import comment from "../common/comment.vue";

    export default {
        name: 'photoinfo',
        data() {
            return {
                id: this.$route.params.id, // 从路由中获取到的 图片Id
                photoinfo: {}, // 图片详情
                list: [] // 缩略图的数组
            };
        },
        created() {
            this.getPhotoInfo();
            this.getThumbs();
        },
        methods: {
            getPhotoInfo() {
                // 获取图片的详情
                this.$axios.get("http://47.89.21.179:8080/api/getimageInfo/" + this.id).then(result => {
                    if (result.data.status === 0) {
                        this.photoinfo = result.data.message[0];
                    }
                });
            },
            getThumbs() {
                // 获取缩略图
                this.$axios.get("http://47.89.21.179:8080/api/getthumimages/" + this.id).then(result => {
                    if (result.data.status === 0) {
                        // 循环每个图片数据，补全图片的宽和高
                        result.data.message.forEach(item => {
                            item.w = 600;
                            item.h = 400;
                            item.src = 'https://img14.360buyimg.com/n0/jfs/t18217/71/1297651149/423731/9391501f/5ac6e1a1Nca74f534.jpg';
                            item.msrc = 'http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg';
                            item.alt = 'picture1';
                            item.title = 'Image Caption 1';
                        });
                        // 把完整的数据保存到 list 中
                        this.list = result.data.message;
                    }
                });
            },
            handleClose () {
                console.log('close event')
            }
        },
        components: {
            // 注册 评论子组件
            "cmt-box": comment
        }
    };
</script>

<style scoped>
    .photoinfo-container {
        padding: 3px;
    }
    .photoinfo-container h3 {
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }

    .photoinfo-container .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }

    .photoinfo-container .content {
        font-size: 13px;
        line-height: 30px;
    }

</style>
