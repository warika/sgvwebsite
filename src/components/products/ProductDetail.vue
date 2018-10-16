<template lang="html">
  <div class="">
    <b-row v-for="row in filterName()" align-v="center">
      <b-col cols="7">
        <b-img :src="row.photo" fluid alt="Responsive image" />
      </b-col>
      <b-col cols="5">
        <b-img :src="row.drawing" fluid alt="Responsive image" />
      </b-col>
      <b-col cols="12">
        ความยาว :<span v-for="length in row.lengths">
            {{length}},
        </span><br>
        บรรจุ :<span v-for="pack in row.packs">
            {{pack}}
        </span><br>
        สี :<span >
            {{row.colors.length}}
        </span>
        <div
          v-for="color in row.colors"
          class="d-inline-block color-width mr-1"
          :class="{'pointer': color.image, 'no-image': !color.image}"
          :style="{'background-color': color.hex}"
          @click="setImage(row.name, color.image)">
        </div><br>

        
      </b-col>
    </b-row>

  </div>
</template>

<script>


export default {
  props: ['code'],
  data () {
    return {
      // code: this.$route.params.code,
      selectedModal:'',
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

        }
      ]
    }
  },
  methods: {
    setImage (group, image) {
      if (!image) return
      let row = this.rows.find(v => v.name === group)
      row.photo = image
    },
    filterName(){
      let result = this.rows.filter(v=> {
        return v.name == this.code
      })
      return result
    }
  },
  created(){
    this.filterName()
  },

}
</script>

<style lang="css" scoped>
.drawing-size{
  width: 100px;
  height: 80px;

}
.no-image {
  opacity: 0.5;
}
.color-width {
  border-radius: 10px;
  width: 25px;
  height: 25px;
}
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
.custom-height {
  height: 600px;
}
.photo-height {
  height: 200px;
  padding: 10px 10px 10px 10px;
}
</style>
