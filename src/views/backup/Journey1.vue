<template lang="html">
  <div>
    <div class="row">
      <div class="col-lg-12 body1">
        <h1 class="letter-h1 fade-in">Got to know us </h1>
      </div>
      <div class="col-lg-12 ">
        <div class="triangle1">
        </div>
      </div>

      <div class="col-lg-12 body2">
        <div class="container">
        <div class="row">

            <div class="col-lg-6" v-for="item in items">
              <b-img :src="item.photo" fluid alt="Responsive image" />
            </div>
            <div class="col-lg-6">
  <p class="p1">testtttttttttttttttttttttttt</p>
            </div>
          </div>

        </div>

      </div>

      <!-- <div class="col-lg-12">
        <div class="triangle2">
        </div>
      </div> -->
      <!-- <div class="col-12 body3">
      </div> -->
      <!-- <div class="col-12 body2">
        <div class="triangle1">
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
// <!-- <div class="row">
//   <div class="col-12 body bg-primary" style="z-index:-1;">
//     <div class="half-circle bg-warning">
//
//     </div>
//   </div>
// </div> -->

export default {
  data(){
    return{
      items:[
        { photo:'img/about/about1.jpg'}
      ]
    }
  },
  // computed: {
  //   name () {
  //     return localStorage.getItem("name");
  //   }
  // },
  // methods: {
  //   setItem () {
  //     localStorage.setItem("name", "Warika");
  //   }
  // }

}
</script>

<style lang="css" scoped>

.triangle1 {
  width: 0px;
  height: 0px;
  border-left: 50vw solid #488bc4;
  border-right: 50vw solid #488bc4;
  border-top: 50px solid #286090;
}
.triangle2 {
  width: 0px;
  height: 0px;
  border-left: 50vw solid #286090;
  border-right: 50vw solid #286090;
  border-top: 50px solid #488bc4;
}
.triangle3 {
  width: 0px;
  height: 0px;
  border-left: 50vw solid #286090;
  border-right: 50vw solid #286090;
  border-bottom: 50px solid #286090;
}
.half-circle {
  position: relative;
  top: -50px;
  display: block;
  height: 100px;
  border-radius: 50%;
}
.p1{
  text-align: justify;
  padding-top : 10px;
  font-size : 0.95rem;
  line-height: 150%;
  color : #4B4B4B;
}

.padding{
  padding: 0px !important;
}
.body1{
  background-size: cover;
  height: 200px;
  background-color: #286090;
}
.body2{
  background-size: cover;
  min-height: 400px;
  background-color: #488bc4;
}
.body3{
  background-size: cover;
  height: 300px;
  background-color: #286090;
}
.letter-h1{
  font-size: 3vw;
  line-height: 200px;
  text-align: center;
  color: #fff;
   text-shadow: 2px 2px 4px 	#808080;
}
.fade-in {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 2s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

</style>
