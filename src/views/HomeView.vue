<template>
  <v-app>
    <NavBar class="index" />
    <FilTer />
    <DashBoard />
    <FooTer />
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooTer from '@/components/FootEr.vue'
import DashBoard from '@/components/DashBoard.vue'
import FilTer from '@/components/FilTer.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooTer,
    DashBoard,
    FilTer,
  },
}
</script>
