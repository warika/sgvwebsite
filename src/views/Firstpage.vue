<template lang="html">
<div class="bg">
  <div class="title">
   <h1 class="fade-in">SUPGANGVARL</h1>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    checkDate () {
      let data = JSON.parse(localStorage.getItem("isVisit"))
      if (data) {
        let curDate = new Date(data.date)
        let now = new Date()
        let dateDiff = (now.getTime() - curDate.getTime()) / 1000

        if (dateDiff < 14400) {
          this.$router.push('/home')
        }
      }
    },
    gotoHome () {
      let data = {
        date: new Date()
      }
      localStorage.setItem("isVisit", JSON.stringify(data))
      this.$router.push('/home')
    },
    checkScreen(){
      var w = window.innerWidth
      if (w < 800) {
        console.log("Small");
        this.$router.push('/home')
      }
    }
  },
  created() {
    this.checkScreen()
    this.checkDate()
    setTimeout(() => {
      this.gotoHome()
    }, 7000)
  }
}
</script>

<style lang="css" scoped>
.bg{
  background-color: #F40000;
  height: 1000px;
}
.fade-in {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 5s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@import url('https://fonts.googleapis.com/css?family=Montserrat');
body {
	background-color: #111;
}

.title {
	font-family: "Montserrat";
	text-align: center;
	color: #FFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	letter-spacing: 1px;
}

h1 {
	background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
	background-size: cover;
	color: transparent;
	-moz-background-clip: text;
	-webkit-background-clip: text;
	text-transform: uppercase;
	font-size: 120px;
	line-height: .75;
	margin: 10px 0;
}
.white-mode {
	text-decoration: none;
	padding: 7px 10px;
	background-color: #122;
	border-radius: 3px;
	color: #FFF;
	transition: .35s ease-in-out;
	position: absolute;
	left: 15px;
	bottom: 15px;
	font-family: "Montserrat";
}

.white-mode:hover {
	background-color: #FFF;
	color: #122;
}
</style>
