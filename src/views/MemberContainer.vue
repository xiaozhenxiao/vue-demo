<template>
    <div style="text-align: center">
        <div :style="{'max-height': this.curHeight + 'px','overflow-y': 'auto'}" v-infinite-scroll="loadMore"
             infinite-scroll-disabled="busy"
             infinite-scroll-distance="10">
            <table>
                <tr v-for="(d,index) in data" :key="index">
                    <td>{{index}}</td>
                    ----
                    <td><h4>{{d.name}}</h4></td>
                </tr>
            </table>
            <div>上拉加载更多……</div>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui";
    import Qs from 'qs'

    var count = 0;
    var times = 0;

    export default {
        data() {
            return {
                data: [],
                busy: false,
                curHeight: 700,
                curWidth: 400
            }
        },
        mounted() {
            // this.getData();
            this.curHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 100;
            this.curWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            console.log("width=" + this.curWidth);
            console.log("height=:" + this.curHeight);
        },
        beforeDestroy() {
            this.data = [];
            count = 0;
            times = 0;
        },
        methods: {
            getData() {
                if (times > 5) {
                    this.busy = true;
                } else {
                    this.busy = false
                }

                /*const data = {brandType: 1, userPin: 'zhangsan'};
                const url = 'bcp/account';
                const options = {
                    method: 'POST',
                    headers: {'content-type': 'application/x-www-form-urlencoded'},
                    data: Qs.stringify(data),
                    url
                };
                this.$axios(options)*/
                this.$axios.post("bcp/account",Qs.stringify({brandType: '1', userPin: 'zhangsan'}))
                    .then(result => {
                        console.log("result:" + result.data.success);
                        if (result.data.success) {
                            Toast("success" + JSON.stringify(result))
                            // 如果没有失败，应该把数据保存到 data 上
                            for (let i = 0, j = 20; i < j; i++) {
                                this.data.push({name: count++});
                            }
                        } else {
                            console.log("获取列表失败！" + JSON.stringify(result));
                        }
                    });

            },
            loadMore: function () {
                this.busy = true;

                console.log("调用的次数:" + times++)
                // setTimeout(() => {
                this.getData();
                // this.busy = false;
                // }, 1000);
            }
        }
    }
</script>

<style scoped>
    .myScroll {
        overflow-y: auto;
    }
</style>