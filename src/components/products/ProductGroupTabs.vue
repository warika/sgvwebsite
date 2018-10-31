<template>
  <div>
    <b-card no-body class="">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="dark">Model</b-btn>
      </b-card-header>

      <b-card-body>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-xs-12 mb-2">
            <component :is="selected" class="mb-1"></component>
          </div>

          <div class="col-lg-6 col-md-6 col-xs-12">
            <ProductGroupModel @select="setModel"></ProductGroupModel>
            <a href="#" @click.prevent="selected = 'ProductGroupImage'">รูปภาพ</a> |
            <a href="#" @click.prevent="selected = 'ProductGroupYoutube'">Vdoการติดตั้ง</a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-xs-12 mb-2">
            Color Pallet
            <VColorPallet></VColorPallet>

          </div>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import ProductGroupModel from './ProductGroupModel.vue'
import ProductGroupModelDetail from './ProductGroupModelDetail.vue'
import ProductGroupYoutube from './ProductGroupYoutube.vue'
import ProductGroupImage from './ProductGroupImage.vue'
import VColorPallet from '@/components/carousel/VColorPallet.vue'
export default {
  data () {
    return {
      selected: 'ProductGroupImage'
    }
  },
  methods: {
    setModel(model) {
      this.selected = 'ProductGroupModelDetail'
    }
  },
  components: {
    ProductGroupModel,
    ProductGroupYoutube,
    ProductGroupImage,
    VColorPallet,
    ProductGroupYoutube,
    ProductGroupModelDetail

  }
}
</script>

<style lang="css" scoped>
.imgwrapper {
   width: 100%;
}
</style>
