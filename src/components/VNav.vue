<template lang="html">
  <b-navbar class="shadow" toggleable="md" type="dark" variant="danger" sticky>
    <div class="container ">
    <b-navbar-toggle target="nav_collapse" ></b-navbar-toggle>
    <b-navbar-brand href="#" >
      <a href="https://fontmeme.com/supreme-font/">
        <img src="https://fontmeme.com/permalink/181012/2c3c41771135bd42c1c41b8548ce5b02.png"
        alt="supreme-font" border="0"></a>
      <!-- <img :src="comlogo.logo" alt=""> -->
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto nav-font ">
        <b-navbar-nav >
          <router-link
            :to="item.to"
            v-for="(item, i) in items"
            :key="i" tag="li"
            active-class="active"
            class="nav-item ">
            <a class="nav-link">
              {{item.name}}
            </a>
          </router-link>
        </b-navbar-nav>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">TH</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>



  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link
            :to="item.to"
            v-for="(item, i) in items"
            :key="i" tag="li"
            active-class="active"
            class="nav-item">
            <a class="nav-link">
              {{item.name}}
            </a>
          </router-link>
        </ul>
      </div>
    </div>

  </nav> -->
</template>

<script>
export default{
  data (){
    return {
      items:[
        {name:'Home', to: {name: 'home'}},
        {name:'About', to: {name: 'about'}},
        {name:'Product', to: {name: 'product'}},
        {name:'Journey', to: {name: 'journey'}},
        {name:'Contact', to: {name: 'contact'}}
      ],
      comlogos:[
        { logo:'img/companylogo.png'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.shadow {
  width: 100%;
  display: inline-block;
  float: left;

}
.nav-font{
  font-family: 'Anton', sans-serif;
  font-weight: 35px;
}


</style>
