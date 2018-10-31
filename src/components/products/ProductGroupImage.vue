<template lang="html">
  <!-- <b-modal title="Picture" v-model="modalShow" lazy>
    <b-row class="justify-content-md-center">
     <b-col>
       <v-swipe :images="$store.state.images"></v-swipe>
     </b-col>
    </b-row>
  </b-modal> -->
  <!-- <b-row class="justify-content-md-center">
   <b-col>

   </b-col>
  </b-row> -->
  <v-swipe :images="$store.state.images" class="img-responsive"></v-swipe>

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
.imgwrapper {
   width: 100%;
}
</style>
