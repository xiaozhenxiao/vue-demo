<template>
    <div>
        <button class="button" @click.prevent="run" :disabled="isShow">{{ text }}</button>
    </div>
</template>

<script>
    export default {
        name: "SMSverify",
        props: {
            second: {
                type: Number,
                default: 60
            }
        },
        data() {
            return {
                time: 0,
                isShow: {
                    type: Boolean,
                    default: false
                }
            }
        },
        created() {
            this.isShow = false
        },
        methods: {
            run() {
                this.$emit('run');
            },
            start() {
                this.time = this.second;
                this.timer();
            },
            stop() {
                this.time = 0;
                this.isShow = false;
            },
            setDisabled(val) {
                this.isShow = val;
            },
            timer() {
                if (this.time > 0) {
                    this.time--;
                    setTimeout(this.timer, 1000);
                } else {
                    this.isShow = false;
                }
            }
        },
        computed: {
            text() {
                return this.time > 0 ? this.time + 's 后重获取' : '获取验证码';
            }
        }
    }
</script>

<style scoped>
    .button {
        background-color: #6641e2;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>