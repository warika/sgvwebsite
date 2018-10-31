<template lang="html">
  <!-- <b-modal title="How To" v-model="modalShow" lazy>
    <v-youtube
      src="https://www.youtube.com/embed/qFLhGq0060w"
      v-for="n in 2"
      class="mb-2">
    </v-youtube>
  </b-modal> -->
  <v-youtube
    src="https://www.youtube.com/embed/qFLhGq0060w"
    class="mb-2"
    aspect="4by3">
  </v-youtube>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    modalShow: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
