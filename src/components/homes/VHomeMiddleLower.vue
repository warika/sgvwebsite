<template lang="html">
  <div class="">

  <div class="container background">
    <h1 class="titlehead ">Top Favorite</h1>
    <!-- <v-header title="Top Favorite" class="mb titlehead" ></v-header> -->
    <div class="row padcenter ">
      <div class="col-lg-4 " v-for="item in items">
        <b-card tag="article" style="max-width: 20rem;" class="mb-2 card ">
          <div class="col-lg-12">
            <b-img :src="item.photo" fluid alt="Responsive image" />
          </div>

        </b-card>
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
        { photo:'img/topfavorite/top1.jpg',text:'CT6'},
        { photo:'img/topfavorite/top2.jpg',text:'CT10'},
        { photo:'img/topfavorite/top4.jpg',text:'G30'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
.titlehead{
  font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  margin-bottom: 1em;
}
.background{
  /* background: linear-gradient(-15deg, #FFF 60%, #FDB933 60%); */
  padding-top: 3em;
  padding-bottom: 5em;
  background-image: linear-gradient(to top,#FDB933 60% 0%, #FDB933 60%, #FDB933 60%);
  }
.background-size:100px 100px;
.hm-gradient {
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
  padding-top: 3em;
  padding-bottom: 10em;
}
.mb{
  margin-bottom: 7em;
}
.card{
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
}
.imagecard{
  width: 100%;
padding-bottom: 75%;
background: gold; /** <-- For the demo **/
}


</style>
