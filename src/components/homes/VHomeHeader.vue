<template>
<div class="">
  <div class="container-fluid pt-5">
    <v-swipe class="d-none d-md-block d-lg-block d-xl-block" :images="images.normal"></v-swipe>
    <v-swipe class="d-block d-md-none" :images="images.resize"></v-swipe>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
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
</style>
