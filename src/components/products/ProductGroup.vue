<template lang="html">
  <div class="container">


  <div class="row">


  <div class="col-12">
    <!-- <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <button @click="imageShow = true" class="btn btn-outline-light">
              image
            </button>
            <button @click="youtubeShow = true" class="btn btn-outline-light">
              youtube
            </button>
          </div>
          <div class="col-12 col-md-6">
            <img
              class="photo-height pointer"
              src="img/portfolio/01-thumbnail.png"
              alt="Card image cap">
          </div>
          <div class="col-12 col-md-6">
            <ProductGroupModel></ProductGroupModel>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <ProductGroupYoutube v-model="youtubeShow"></ProductGroupYoutube> -->
    <!-- <ProductGroupImage v-model="imageShow"></ProductGroupImage> -->

    <b-card no-body>
    <b-tabs card class="tabcolor">
      <b-tab title="model" active >
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              class="photo-height pointer imgwrapper"
              src="img/portfolio/01-thumbnail.png"
              alt="Card image cap ">
          </div>
          <div class="col-12 col-md-6">
            <ProductGroupModel></ProductGroupModel>
          </div>
        </div>
      </b-tab>
      <b-tab title="picture">
        <div class="col-12 ">
          <ProductGroupImage ></ProductGroupImage>
        </div>
      </b-tab>
      <b-tab title="VDO">
        <div class="col-12">
          <ProductGroupYoutube ></ProductGroupYoutube>
        </div>
      </b-tab>
    </b-tabs>
  </b-card>



  </div>
  </div>
  </div>
</template>

<script>
import ProductGroupModel from './ProductGroupModel.vue'
import ProductGroupYoutube from './ProductGroupYoutube.vue'
import ProductGroupImage from './ProductGroupImage.vue'

export default {
  data () {
    return {
      imageShow: false,
      youtubeShow:false
    }
  },
  components: {
    ProductGroupModel,
    ProductGroupYoutube,
    ProductGroupImage,

  }
}
</script>

<style lang="css" scoped>
.imgwrapper {
   width: 80%;
}
.photo-height {
  height: 200px;
  padding: 10px 10px 10px 10px;
}
.tabcolor{
  background-color: ;
  text-decoration-color: #000;
}
</style>
