<template lang="">
    <v-app>
        <NavBar/>
        <h1>Detail Buku Disini</h1>
        <FooTer/>
    </v-app>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import FooTer from '../components/FootEr.vue'

export default {
    name: 'BookDetails',
    components: {
        NavBar,
        FooTer,
    },
}
</script>


<style lang="">
    
</style>