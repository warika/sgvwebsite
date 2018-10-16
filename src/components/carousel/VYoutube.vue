<template lang="html">
  <b-embed
    type="iframe"
    frameborder="0"
    allow="autoplay; encrypted-media"
    aspect="16by9"
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
    }
  }
}
</script>

<style lang="css">
</style>
