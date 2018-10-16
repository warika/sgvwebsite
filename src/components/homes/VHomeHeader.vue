<template>
<div class="">
  <div class="top">
    <!-- <template v-for="(test, i) in tests">
    <v-swipe class="img-size" :images="test.imagesnormal"></v-swipe>
    </template> -->
  </div>
  <div class="container-fluid pt-5">
    <span v-touch:swipe.left="touchHandler"></span>
  
    <div class="" v-if="windowWidth >= 700">

      <template v-for="(test, i) in tests">
      <v-swipe class="img-size" :images="test.imagesnormal"></v-swipe>
      </template>
    </div>
    <div class="" v-if="windowWidth < 700">

      <template v-for="(test, i) in tests">
      <v-swipe class="img-size" :images="test.imagesresize"></v-swipe>
      </template>
    </div>
  </div>
</div>

</template>

<script>
export default {

  data() {
    return {
      modalShow: false,
      tests:[
        {
          Headers:'top',
          imagesnormal: [
            {text: 'High Quality Raw Material', src: 'img/header-bg.jpg'},
            {text: '', src: 'img/header2-bg.jpg'}
          ],
          imagesresize: [
            {text: 'High Quality Raw Material', src: 'img/headerresize-bg.jpg'},
            {text: '', src: 'img/header2-bg.jpg'}
          ],
        }
      ],
      modalShow: false,
      youtubeShow:false,
      windowWidth: window.innerWidth
    }
  }
,
  methods:{
    touchHandler(){
      console.log(5);
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      });
    })
  },
}
</script>
<style lang="css" scoped>
.img-size {
    width: auto;
    height: auto;
}
.section-heading {
  text-align: center;
  font-size: 30px;
  margin-top: 0;
  font-family: 'Droid Serif';
  margin-top: 75px;
  margin-bottom: 75px;
}

</style>
