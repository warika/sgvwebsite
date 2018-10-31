<template lang="html">
  <div class="col-12 text-center">
    <h2 class="section-heading">{{title}}</h2>

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
  }
}
</script>

<style lang="css" scoped>
.section-heading {
  font-size: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: 'Droid Serif';
}
.section-subheading {
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 75px;
  text-transform: none;
  font-family: 'Droid Serif';
}
.sub-title {
   opacity: 0.5;
}
</style>
