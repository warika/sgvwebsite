<template lang="html">
  <div class="">
    <b-row align-v="center">
      <b-col cols="col-lg-12 col-md-12 col-xs-10">
        <!-- <b-img src="img/product/G30.png" fluid alt="Responsive image"  /> -->
        <b-img center src="img/product/G30.png" fluid alt="center image Responsive image" />
      </b-col>
      <b-row >
      <b-col cols="col-lg-7 col-md-7 col-xs-7">
        ความยาว: 2.0, 2.5 เมตร<br>
        บรรจุ: 100 เส้น/กล่อง<br>
        สี: 25 สี
        <VColorPallet></VColorPallet>
      </b-col>
      <b-col cols="col-lg-5 col-md-5 col-xs-5">
        <b-img src="img/product/G30DRAWING.png" fluid alt="Responsive image" />

      </b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
import VColorPallet from '@/components/carousel/VColorPallet.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    VColorPallet
  }
}
</script>

<style lang="css" scoped>
</style>
