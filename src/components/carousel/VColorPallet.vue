<template lang="html">
  <div class="">
    <div
      v-for="color in colors"
      class="d-inline-block color-width mr-1 pointer"
      :style="{'background-color': color.hex}"><br>
      <small class="font-small">{{color.name}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VColorPallet',
  data () {
    return {
      colors: [
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'},
        {hex:'#000000', name:'BL901'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.font-small{
  font-size: 10px
}
.no-image {
  opacity: 0.5;
}
.color-width {
  border-radius: 10px;
  width: 30px;
  height: 25px;
}
</style>
