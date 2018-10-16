<template lang="html">
  <div class="">
    <div class="container pt-5">
      <v-header title="Product" subtitle="Make Your Home Better ."></v-header>

      <div class="col-12">
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="(group, i) in groups" :key="i">
            <div class="card custom-height">
              <ProductGroup :group="group" v-if="!group.show"></ProductGroup>
              <ProductGroupModel :group="group" v-if="group.show"></ProductGroupModel>
            </div>
          </div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import ProductGroup from '@/components/products/ProductGroup.vue'
import ProductGroupModel from '@/components/products/ProductGroupModel.vue'
import ProductDetail from '@/components/products/ProductDetail.vue'


export default {
  data () {
    return {
      modalShow: true,
      code: this.$route.params.code,
      detail: {},
      groups: [
        {code: 1, name:'Aluminium Tile Trim', photo:'img/portfolio/01-thumbnail.png', page: '/product/aluminiumtiletrim', show: false},
        {code: 2, name:'Aluminium Stair Nosing', photo:'img/portfolio/02-thumbnail.png ', page: '/product/aluminiumstairnosing', show: false},
        {code: 3, name:'PVC Tile Trim', photo:'img/portfolio/03-thumbnail.png', page: '/product/pvctiletrim', show: false},
        {code: 4, name:'PVC UV Coat Tile Trim', photo:'img/portfolio/04-thumbnail.png', page: '/product/pvcovcoattiletrim', show: false},
        {code: 5, name:'PVC Stair Nosing', photo:'img/portfolio/05-thumbnail.png', page: '/product/pvcstairnosing', show: false},
        {code: 6, name:'PVC Chamfer', photo:'img/portfolio/06-thumbnail.png', page: '/product/pvcchamfer', show: false},
        {code: 7, name:'PVC Groove', photo:'img/portfolio/07-thumbnail.png', page: '/product/pvcgroove', show: false},
        {code: 8, name:'PVC Corner Bead', photo:'img/portfolio/08-thumbnail.png', page: '/product/pvccornerbead', show: false},
        {code: 9, name:'PVC Skirting Board', photo:'img/portfolio/09-thumbnail.png', page: '/product/pvcskirtingboard', show: false},
        {code: 10, name:'PVC Wire Way', photo:'img/portfolio/10-thumbnail.png', page: '/product/pvcwireway', show: false},
        {code: 11, name:'PVC Multi-Purpose Mat', photo:'img/portfolio/11-thumbnail.png', page: '/product/pvcmultipurposemat', show: false}
      ]
    }
  },
  components: {
    ProductGroup,
    ProductGroupModel,
    ProductDetail

  }
}
</script>

<style lang="css" scoped>

.grow { transition: all .3s ease-in-out; }
.grow:hover { transform: scale(1.05); }

.custom-height {
  height: 300px;
  background-image: radial-gradient(circle, 	#F8F8F8, 	#E0E0E0);
}
</style>
