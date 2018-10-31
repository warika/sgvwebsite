<template>
<div>
  <!-- <div class="container-fluid pt-5">
    <v-swipe class="d-none d-md-block d-lg-block d-xl-block" :images="images.normal"></v-swipe>
    <v-swipe class="d-block d-md-none" :images="images.resize"></v-swipe>
  </div> -->

  <b-card overlay
          v-for="tophead in topheads"
          :img-src="tophead.image"
          img-alt="Card Image"
          text-variant="danger"
          title="Supgangvarl Co., ltd."
          >
    <p class="card-text">
      The leading PVC decorative profile in Thailand
    </p>
  </b-card>

</div>

</template>

<script>
export default {
  data() {
    return {
      topheads:[
        {image:'img/header2-bg.jpg'}
      ],
      images: {
        normal: [
          {text: 'High Quality Raw Material', src: 'img/header-bg.jpg'},
          {text: '', src: 'img/header2-bg.jpg'}
        ],
        resize: [
          {text: 'High Quality Raw Material', src: 'img/headerresize-bg.jpg'},
          {text: '', src: 'img/header2-bg.jpg'}
        ]
      }
    }
  }
}
</script>

<style lang="css" scoped>
.texthead{
  margin-top: 2em;
  color: #000;
  text-align: center;
}
.pt {
  padding-top: 20em;
}
.img-opacity {
    opacity: 0.8;
    filter: alpha(opacity=50); /* For IE8 and earlier */
}
.darken-grey-text {
    color: #2E2E2E;
}


</style>
