<template lang="html">
  <b-embed
    type="iframe"
    frameborder="0"
    allow="autoplay; encrypted-media"
    :aspect="aspect"
    :src="src"
    :allowfullscreen="!disableFullscreen">
  </b-embed>
</template>

<script>
export default {
  name: 'VYoutube',
  props: {
    src: {
      type: String,
      requried: true
    },
    disableFullscreen: {
      type: Boolean,
      requried: false
    },
    aspect: {
      type: String,
      required: false,
      default: '16by9'
    }
  }
}
</script>

<style lang="css">
</style>
