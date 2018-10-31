<template lang="html">
  <div class="hm-gradient">
    <div class="container ">
      <v-header title="Gallery" ></v-header>
      <div class="row ">
        <div class="col-lg-3 padding btn" v-for="n in 4" :key="n">
          <b-img
            :src="'img/gallery/imggallery' + n + '.jpg'"
            fluid>
          </b-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="css" scoped>

.padding{
  padding: 0px !important;
}
.hm-gradient {
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
  padding-top: 3em;
  padding-bottom: 10em;
}
.mb{
  margin-bottom: 7em;
}
.btn {
  background-color: none;
  color: white;
  opacity: 0.6;
  transition: 0.3s;
}

.btn:hover {
  opacity: 1
}

</style>
