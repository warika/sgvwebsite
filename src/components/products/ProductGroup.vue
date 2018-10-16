<template lang="html">
  <div class="">
    <div class="card">
      <img class="card-img-top photo-height pointer" :src="group.photo" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">

            <!-- <b-button @click="group.show = true" variant="outline-success">รุ่นเพิ่มเติม</b-button> -->
            <v-button @click="group.show = true" class="btn btn-outline-light" width="100px">
              รุ่นเพิ่มเติม
            </v-button>
            <i class="fas fa-image fa-2x text-success" @click="modalShow = !modalShow"></i>
            <i class="fab fa-youtube fa-2x text-danger" @click="youtubeShow = !youtubeShow"></i>
        </p>
      </div>
    </div>

    <template v-for="(groupphoto, i) in filterName()">
      <b-modal title="How To" v-model="youtubeShow" lazy>
        <b-embed type="iframe"
          class="pb-2"
          v-for="vdo in groupphoto.vdos"
          frameborder="0"
          allow="autoplay; encrypted-media"
          aspect="16by9"
          :src="vdo.url"
          allowfullscreen>
        </b-embed>
      </b-modal>

      <b-modal  title="Picture" v-model="modalShow" lazy>
        <b-row class="justify-content-md-center">
         <b-col>
           <v-swipe :images="groupphoto.images"></v-swipe>
         </b-col>
        </b-row>
      </b-modal>
    </template>
  </div>
</template>

<script>
export default {
  props: ['group','name'],
  data(){
    return{
      groupphotos:[
        {
          name:'PVC Tile Trim',
          vdos: [
            {text: 'a', url: 'https://www.youtube.com/embed/qFLhGq0060w'},
            {text: 'a', url: 'https://www.youtube.com/embed/qFLhGq0060w'}
          ],
          images: [
            {text: 'A', src: 'img/team/1.jpg'},
            {text: 'B', src: 'img/team/2.jpg'}
          ],
        },
        {
          name:'Aluminium Tile Trim',
          vdos: [
            {text: 'a', url: 'https://www.youtube.com/embed/qFLhGq0060w'}
          ],
          images: [
            {text: 'A', src: 'img/product/G30.png'},
            {text: 'B', src: 'img/product/G30DRAWING.png'}
          ]
        }
      ],
      modalShow: false,
      youtubeShow:false
    }
  },
  methods:{
    filterName(){
      let result = this.groupphotos.filter(v=> {
        return v.name == this.group.name
      })
      return result
    }
  }
}

</script>

<style lang="css" scoped>
.icon-bar {
    width: 100%;
    background-color: #555;
    overflow: auto;
}

.icon-bar a {
    float: left;
    width: 20%;
    text-align: center;
    padding: 12px 0;
    transition: all 0.3s ease;
    color: white;
    font-size: 36px;
}

.icon-bar a:hover {
    background-color: #000;
}

.active {
    background-color: #4CAF50;
}
.photo-height {
  height: 200px;
  padding: 10px 10px 10px 10px;
}
</style>
