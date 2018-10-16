<template lang="html">
  <div class="">
    <VNav></VNav>
    <!-- <div class="container mt-5">
      <div class="col-12">

      </div>
    </div> -->
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VNav from '@/components/VNav.vue'
export default {
  components: {
    VNav
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
