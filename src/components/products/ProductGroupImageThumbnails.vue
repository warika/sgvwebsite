<template lang="html">
    <v-swipe></v-swipe>
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

<style lang="css">
</style>
