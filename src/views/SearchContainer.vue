<template>
    <div>
        <SMS ref="timerbtn" v-on:run="sendCode" v-bind:second="120"></SMS>
        <loading></loading>
        <form>
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
            <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
            <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
        </form>
    </div>
</template>


<script>
    import SMS from '../components/common/SMSVerification'
    import loading from '../components/common/loading'

    export default {
        name: "Search",
        data() {
            return {
                username:"",
                email:"",
                password:"",
                phone:"",
                website:"",
                number:"",
                birthday:"",
                introduction:"",
                searchValue: "",
                reslut: []
            }
        },
        methods: {
            sendCode() {
                this.$refs.timerbtn.setDisabled(true); //设置按钮不可用

                console.log("发送短信");
                this.$refs.timerbtn.start(); //启动倒计时
            }
        },
        components: {
            SMS,
            loading
        }
    }
</script>

<style scoped>
</style>