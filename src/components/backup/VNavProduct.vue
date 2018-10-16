<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <img class="img-fluid" src="img/companylogo.png" alt="">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto" >
          <li class="nav-item" v-for="item in items">
            <a class="nav-link js-scroll-trigger" @click="goBack">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default{
  data (){
    return {
      items:[
        {name:'About Us', link: '#services'},
        {name:'Product', link: '#portfolio'},
        {name:'Journey', link: '#about'},
        {name:'Team', link: '#team'},
        {name:'Message', link: '#contact'}

      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="css">
</style>
