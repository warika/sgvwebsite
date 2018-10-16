<template lang="html">
  <button
    class=""
    @click="emitClick"
    @mouseover="show=true"
    @mouseout="show=false"
    :style="{'min-width': width}">
    <transition name="fade" mode="out-in">
      <span v-if="!show" key="text">
        <slot></slot>
      </span>
      <span v-else key="icon">
        >>>>
      </span>
    </transition>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: ['width'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    emitClick () {
      this.$emit('click', null)
    }
  }
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
