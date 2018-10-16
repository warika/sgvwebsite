<template lang="html">
  <div class="">
    <div
      v-for="color in colors"
      class="d-inline-block color-width mr-1 pointer"
      :class="isImage(color)"
      :style="{'background-color': color.hex}"
      @click="emitClick(color)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'VColorPallet',
  props: {
    group: {
      type: String,
      required: true
    },
    colors: {
      type: Array,
      required: true
    }
  },
  methods: {
    isImage (color) {
      if (color.image) return ['pointer']
      else return ['no-image']
    },
    emitClick (color) {
      if (color.image) {
        this.$emit('click', {group: this.group, image: color.image})
      }
    }
  }
}
</script>

<style lang="css" scoped>
.no-image {
  opacity: 0.5;
}
.color-width {
  border-radius: 10px;
  width: 25px;
  height: 25px;
}
</style>
