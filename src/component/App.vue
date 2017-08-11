<template>
    <main>  
        <vue-head></vue-head>
        <router-view></router-view>
        <vue-foot></vue-foot>
    </main>
</template>

<script>
    import Cheader from './home/header.vue';
    import Cfooter from './home/footer.vue';

    export default {
        components: {
            "vue-head": Cheader,
            "vue-foot": Cfooter
        }
    }
</script>
<style>
    
</style>