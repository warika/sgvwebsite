<template lang="html">
  <div class="col-12 text-center">
    <h2 class="section-heading">{{title}}</h2>
    <h3 class="section-subheading text-muted">{{subtitle}}</h3>
  </div>
</template>

<script>
export default {
  name: 'VHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
