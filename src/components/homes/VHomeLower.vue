<template lang="html">
  <div class="container">
    <h1 class="section-heading">Home Ideas</h1>
    <div class="col-12 section-bottom">
      <div class="row">
        <div class="col-6 col-md-3 bg-warning h-full" v-for="item in items">
          <b-card-group @click="goto(item.link)">
              <b-card
                overlay
                :title="item.text"
                :img-src="item.photo"
                img-alt="Img"
                img-top
                >
                  <p class="card-text">
                    click
                  </p>
              </b-card>
          </b-card-group>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return{
      items:[
        { photo:'https://www.banidea.com/wp-content/uploads/2011/12/Home-Interior-Modern-Nature-Design-1.jpg',text:'CT6',link:'https://www.banidea.com/home-interior-modern-nature-design/'},
        { photo:'img/portfolio/08-thumbnail.png',text:'CT6',link:'https://www.banidea.com/home-interior-modern-nature-design/'},
        { photo:'img/portfolio/08-thumbnail.png',text:'CT6',link:'https://www.banidea.com/home-interior-modern-nature-design/'},
        { photo:'img/portfolio/08-thumbnail.png',text:'CT6',link:'https://www.banidea.com/home-interior-modern-nature-design/'},
      ]
    }

  },
  methods:{
    goto(link){
      window.open(link);
    }
  }
}
</script>

<style lang="css" scoped>

.h-full {
  height: 400px;
}
.h-half {
  height: 200px;
}
.section-heading {
	color: #343a40;
  font-size: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}
.section-bottom{
  margin-bottom: 100px;
}
</style>
