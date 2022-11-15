<template lang="">
    <v-app>
        <NavBar/>
        <h1>Detail Buku Disini</h1>
        <FootEr/>
    </v-app>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import FootEr from '../components/FootEr.vue'

export default {
    name: 'BookDetails',
    components: {
        NavBar,
        FootEr,
    },
}
</script>


<style lang="">
    
</style>