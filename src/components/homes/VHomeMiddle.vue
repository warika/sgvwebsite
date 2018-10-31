<template lang="html">
  <div class="hm-gradient">
  <div class="background ">
    <div class="row" v-for="whoweare in whoweares">
      <div class="col-lg-7 mt-2">
       <h1 class="titlehead ml-3">{{whoweare.title}}</h1>
        <p class="ml-3">{{whoweare.text}}</p>
      </div>
      <div class="col-lg-5">
       <b-img :src="whoweare.image" fluid alt="Fluid image" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      whoweares:[
        {title:'Who We Are',
         text:'Supgangvarl is the one of the leading manufacturer and distributor of PVC and U-PVC products which use for building construction, interior, and exterior. A LONG JOURNEY Over 20 years in construction business, we have our own innovation tools to make our inner process smootly and we also develop more PVC formular due our products look more Durable, Shine ,Stunning and WOW!!.',
         image:'img/header-bg.jpg'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.titlehead{
  font-family: 'Roboto Condensed', sans-serif;
}
.background{
  background: repeating-linear-gradient(45deg, #efefef, #efefef 3px, #f9f9f9 3px, #f9f9f9 5px);
  }
.background-size:100px 100px;
.hm-gradient {
  /* background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%); */
  padding-top: 3em;
  padding-bottom: 10em;
}
.mb{
  margin-bottom: 7em;
}



</style>
