<template lang="html">
<div class="">
  <b-modal v-model="show" >

    <slot > </slot>
  </b-modal>
</div>
</template>

<script>
export default {
  props:['value'],
  data(){
    return{
      groupname:'PVC Tile Trim'

      groupphotos:[
        {
          name:'PVC Tile Trim',
          images: {
            thumbs: [
              {'id': 0, 'url': 'img/team/1.jpg'},
              {'id': 1, 'url': 'img/team/2.jpg'}
            ],
            normal_size: [
              {'id': 0, 'url': 'img/team/1.jpg'},
              {'id': 1, 'url': 'img/team/2.jpg'}
            ]
          }
        },
        {
          name:'Aluminium Stair Nosing', 
          images: {
            thumbs: [
              {'id': 0, 'url': 'img/team/1.jpg'},
              {'id': 1, 'url': 'img/team/2.jpg'}
            ],
            normal_size: [
              {'id': 0, 'url': 'img/team/1.jpg'},
              {'id': 1, 'url': 'img/team/2.jpg'}
            ]
          }
        }
      ]
  }
},
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="css">
</style>
