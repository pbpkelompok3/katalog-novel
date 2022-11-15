<template>
  <v-app>
    <NavBar class="index" />
    <DashBoard />
    <FootEr />
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FootEr from '@/components/FootEr.vue'
import DashBoard from '@/components/DashBoard.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FootEr,
    DashBoard,
  },
}
</script>
