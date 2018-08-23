<template>
    <div>
        <h2>bars</h2>
        <!--balls, bars, beat, bubbles, cylon, spin, spiningDubbles, barsCylon-->
        <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
    </div>
</template>

<script>
    export default {
        name: 'app',
        created(){
        },
        components: {
            // LoadingAnimation
        }
    }
</script>

<style scoped>

</style>