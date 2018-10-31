<template lang="html">
  <div class="body container text-center ">
          <h1 >quality control equipments</h1><br>
    <div class="row">

      <div v-for="quality in qualities" class="gallery">
        <img class="wrapper card card__one " :src="quality.image">
        <h4 class="info">{{quality.text}}</h4>

 </b-card>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return{
      qualities:[
        {text:'aaaaa', image:'img/quality/q1h.jpg'},
        {text:'aaaaa', image:'img/quality/q2h.jpg'},
        {text:'aaaaa', image:'img/quality/q3h.jpg'},
        {text:'aaaa', image:'img/quality/q4h.jpg'},
        {text:'aaaa', image:'img/quality/q5h.jpg'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.body{
  background-size: cover;
  min-height: 500px;
  background-color: #F4F4F4;
}
.wrapper{
  display: flex;
  width: 90%;
  justify-content: space-around;
}
.card{
  width: 220px;
  height: 320px;
  border-radius: 12px;
  padding: 0rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
}

.card:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
    content: '';
    opacity: 0;
    z-index: -1;
  }

  .card:hover,
  .card:focus {
    transform: scale3d(1.006, 1.006, 1);

  .card:after {
      opacity: 1;
    }
  }









</style>
