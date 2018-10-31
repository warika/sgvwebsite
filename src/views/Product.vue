<template lang="html">
  <div class="">
   <div class="container">

     <v-header title="Product" subtitle="Make Your Home Better ."></v-header>
       <div class="row">
        <div class="col-md-6 col-lg-6 col-xs-12 space" v-for="n in 11" :key="n">
            <ProductGroupTabs></ProductGroupTabs>
        </div>

          <!-- <div class="d-sm-block col-md-6 col-lg-6 " v-for="n in 5" :key="n">
              <ProductGroup></ProductGroup>
          </div>


        <div class="d-md-none d-lg-none" v-for="n in 5" :key="n">
            <ProductGroupTabs></ProductGroupTabs>
        </div> -->
      </div>
  </div>
 </div>

</template>

<script>
import ProductGroup from '@/components/products/ProductGroup.vue'
import ProductGroupTabs from '@/components/products/ProductGroupTabs.vue'
import VFilter from '@/components/filters/VFilter.vue'
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
    ProductGroupTabs,
    VFilter
  }
}
</script>

<style lang="css" scoped>
.space{

  margin-top: 10px;
  margin-bottom: 40px
}

</style>
