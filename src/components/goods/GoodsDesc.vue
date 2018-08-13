<template>
    <div class="goodsdesc-container">
        <h3>{{ info.title }}</h3>

        <hr>

        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                info: {} // 图文数据
            };
        },
        created() {
            this.getGoodsDesc();
        },
        methods: {
            getGoodsDesc() {
                this.$axios
                    .get("http://47.89.21.179:8080/api/goods/getdesc/" + this.$route.params.id)
                    .then(result => {
                        if (result.data.status === 0) {
                            this.info = result.data.message[0];
                        }
                    });
            }
        }
    };
</script>

<style scoped>
    .goodsdesc-container {
        padding: 4px;
    }

    .goodsdesc-container h3 {
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }

    .goodsdesc-container .content img {
        width: 100%;
    }
</style>
