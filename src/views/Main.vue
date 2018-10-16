<template lang="html">
  <div class="">
    <VNav></VNav>
    <router-view></router-view>
    <VFooter></VFooter>
  </div>
</template>

<script>
import VNav from '@/components/shares/VNav.vue'
import VFooter from '@/components/shares/VFooter.vue'
export default {
  components: {
    VNav,
    VFooter
  }
}
</script>

<style lang="css">
.section-heading {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 15px;
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
