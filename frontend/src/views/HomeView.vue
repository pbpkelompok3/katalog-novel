<template>
  <v-app>
    <NavBar/>
    <DashBoard/>
    <FooTer/>
  </v-app>
</template>


<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooTer from '@/components/FooTer.vue'
import DashBoard from '@/components/DashBoard.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooTer,
    DashBoard,
  },
}
</script>


<style lang="scss">

</style>