<template lang="html">
  <div class="">
    <b-row align-v="center" v-if="row">
      <b-col cols="7">
        <b-img :src="row.photo" fluid alt="Responsive image" />
      </b-col>
      <b-col cols="5">
        <b-img :src="row.drawing" fluid alt="Responsive image" />
      </b-col>
      <b-col cols="12">
        ความยาว: {{row.lengths.join(', ')}}<br>
        บรรจุ: {{row.packs.join(', ')}}<br>
        สี: {{row.colors.length}}

        <VColorPallet
          :colors="row.colors"
          :group="row.name"
          @click="setImage">
        </VColorPallet>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VColorPallet from '@/components/carousel/VColorPallet.vue'

export default {
  props: ['code'],
  data () {
    return {
      rows:[
        {
          name:'G30',
          photo:'img/product/G30.png',
          drawing:'img/product/G30DRAWING.png',
          colors: [
            {code:'b300', hex:'#cbdee5', image:'img/product/G30B300.jpg'},
            {code:'b301', hex:'#0c5b9d', image:'img/product/G30B301.jpg'},
            {code:'b302', hex:'#4d689d', image:'img/product/G30B302.jpg'},
            {code:'b300', hex:'#cbdee5', image:'img/product/G30B300.jpg'},
            {code:'b301', hex:'#0c5b9d', image:'img/product/G30B301.jpg'},
            {code:'b300', hex:'#cbdee5', image:'img/product/G30B300.jpg'},
            {code:'b301', hex:'#0c5b9d', image:'img/product/G30B301.jpg'},
            {code:'b300', hex:'#cbdee5', image:'img/product/G30B300.jpg'},
            {code:'b301', hex:'#0c5b9d', image:'img/product/G30B301.jpg'},
          ],
          lengths: [
            '2.0 cm.','2.5 cm.'
          ],
          packs: [
            '100'
          ]
        },
        {
          name:'F40',
          photo:'img/portfolio/03-thumbnail.png',
          colors: [
            {code:'bl901', hex:'#000000'},
            {code:'w101', hex:'#000000'}
          ],
          lengths: [],
          packs: []
        }
      ]
    }
  },
  computed: {
    row () {
      return this.rows.find(v => v.name == this.code)
    }
  },
  methods: {
    setImage (data) {
      if (!data.image) return
      let row = this.rows.find(v => v.name === data.group)
      row.photo = data.image
    }
  },
  components: {
    VColorPallet
  }
}
</script>

<style lang="css" scoped>
</style>
