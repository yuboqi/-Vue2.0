<template>
    <div>
        <Header v-show="$route.meta.showHeader"></Header>
        <router-view></router-view>
        <Footer v-show="$route.meta.showFooter"></Footer>
    </div>
</template>

<script>
    import Header from './components/Header';
    import Footer from './components/Footer';
import Banner from './components/Banner/index.vue';
    export default {
        name:'App',
        components:{ Header, Footer, Banner },
        mounted(){
            this.$store.dispatch('categoryList');
        }
    }
</script>

<style>

</style>