<template lang="html">
  <div>
    <VNav></VNav>
    <router-view></router-view>
  </div>
</template>

<script>
import VNav from '@/components/shares/VNav.vue'

export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    VNav
  }
}
</script>

<style lang="css" scoped>

</style>
