<template lang="">
    <v-app>
        <NavBar/>
        <BreadCrumb/>
        <h1>Detail Buku Disini</h1>
        <FooTer/>
    </v-app>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
import FooTer from '../components/FootEr.vue'

export default {
    name: 'BookDetails',
    components: {
        NavBar,
        BreadCrumb,
        FooTer,
    },
}
</script>


<style lang="">
    
</style>