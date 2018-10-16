<template lang="html">
  <div>
    <span class="mr-3" v-for="item in items" :class="item.name">
      <a :href="item.link">
         <i :class="item.icon" aria-hidden="true"></i>
      </a>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return{
      items:[
        {name:'line', icon:'fab fa-line fa-2x'},
        {name:'facebook', icon:'fab fa-facebook-f fa-2x' , link:'https://www.facebook.com/Supgangvarl-1350677818365777'},
        {name:'youtube', icon:'fab fa-youtube fa-2x' , link:'https://www.youtube.com/channel/UCDswY6u3GmYDyhy7Ay3UX9w?view_as=subscriber'},
        {name:'linkedin', icon:'fab fa-linkedin-in fa-2x'},
        {name:'instagram', icon:'fab fa-instagram fa-2x'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.fa-facebook-f {
  color: #3b5998 !important;
}
.fa-facebook-f:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-linkedin-in {
  color: #00aced !important;
}
.fa-linkedin-in:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-instagram {
  color: #bc2a8d !important;
}
.fa-instagram:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-line {
  color: #4dc247 !important;
}
.fa-line:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-youtube {
  color: #fa0000 !important;
}
.fa-youtube:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}



* {
  margin: 0;
  padding: 0;
}

/* body {
  background: #0A122A;
} */

/* Let's style the wrapper in such away that,
it should always be at the center of the browser */
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
}

/* Style the Un-order list by setting its list-style to none */
.wrapper ul {
  list-style: none;
}

/* Style the list items inside the UL list, by setting its width, height and line-height
  and float them to left and set its border and border-radius.
 */
.wrapper ul li {
  width: 75px;
  height: 75px;
  line-height: 75px;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  border: 5px solid #D8E2DC;
  float: left;
  transition: all 0.5s ease;
}

/* Style the icons by setting its color and margin-top value to 20px
to align it properly */
.wrapper ul li .fa {
  color: #D8E2DC;
  margin-top: 20px;
  transition: all 0.5s ease;
}

/* Now target the specific li classes for styling and use box-shadow effect to border and text-shadow effect
  to icons for glowing effect and use transition property for smooth transition effect. */
/*facebook*/
.wrapper ul li:hover.facebook {
  border: 5px solid #3b5998;
  box-shadow: 0 0 15px #3b5998;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-facebook-f {
  color: #3b5998;
  text-shadow: 0 0 15px #3b5998;
  transition: all 0.5s ease;
}

/*linkedin*/
.wrapper ul li:hover.linkedin {
  border: 5px solid #00aced;
  box-shadow: 0 0 15px #00aced;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-linkedin-in{
  color: #00aced;
  text-shadow: 0 0 15px #00aced;
  transition: all 0.5s ease;
}

/* instagram */
.wrapper ul li:hover.instagram {
  border: 5px solid #bc2a8d;
  box-shadow: 0 0 15px #bc2a8d;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-instagram {
  color: #bc2a8d;
  text-shadow: 0 0 15px #bc2a8d;
  transition: all 0.5s ease;
}


/* line */
.wrapper ul li:hover.line {
  border: 5px solid #4dc247;
  box-shadow: 0 0 15px #4dc247;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-line {
  color: #4dc247;
  text-shadow: 0 0 15px #4dc247;
  transition: all 0.5s ease;
}
/* youtube */
.wrapper ul li:hover.youtube {
  border: 5px solid #fa0000;
  box-shadow: 0 0 15px #fa0000;
  transition: all 0.5s ease;
}

.wrapper ul li:hover .fa-youtube {
  color: #fa0000;
  text-shadow: 0 0 15px #fa0000;
  transition: all 0.5s ease;
}


/* media queries */

@media screen and (max-width: 640px){
  .wrapper {
      width: 350px;
  }
  .wrapper ul li{
      margin-top: 10px;
  }
  .wrapper ul li.google{
      margin-left: 60px;
  }
}


@media screen and (max-width: 340px){
  .wrapper {
      width: 150px;
  }
  .wrapper ul li{
      margin:15px;
  }
  .wrapper ul li.google{
      margin-left: 15px;
  }
}

</style>
