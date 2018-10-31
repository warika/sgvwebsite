<template lang="html">
  <div class="container">
    <div class="body1 ">
      <div class="letter-h1">
        Got To Know Us
      </div>
    </div>
    <VAboutTop></VAboutTop>
    <VAboutMiddle></VAboutMiddle>

  </div>
</template>

<script>
import VAboutTop from '@/components/abouts/VAboutTop.vue'
import VAboutMiddle from '@/components/abouts/VAboutMiddle.vue'
export default {
  data(){
    return{
      items:[
        { photo:'img/about/about1.jpg'}
      ]
    }
  },
  components:{
    VAboutTop,
    VAboutMiddle
  }
}
</script>

<style lang="css" scoped>
.padding{
  padding: 0px !important;
}

.body1{
  background-size: cover;
  height: 300px;
  background-color: #fff;
}

.letter-h1{
  font-size: 3vw;
  line-height: 200px;
  text-align: center;
  color: #fff;
   text-shadow: 2px 2px 4px 	#808080;
}
.image-size{
  margin-top: 50px;
  height: 300px;
  width: 300px;

}
</style>
