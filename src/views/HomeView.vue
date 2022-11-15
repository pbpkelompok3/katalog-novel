<template>
  <v-app>
    <NavBar class="index" />
    <DashBoard />
    <FooteR />
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooteR from '@/components/FooteR.vue'
import DashBoard from '@/components/DashBoard.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooteR,
    DashBoard,
  },
}
</script>
