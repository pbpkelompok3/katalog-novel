<template lang="">
    <div>
        <v-overlay
        :z-index="100"
        :value="overlay">

        <v-btn
          class="white--text"
          color="teal"
          @click="overlay = false">
          Hide Overlay
        </v-btn>
      </v-overlay>
    </div>
</template>
<script>
export default {
    data() {
        return {
            overlay: false
        }
    }
}
</script>
<style lang="">
    
</style>