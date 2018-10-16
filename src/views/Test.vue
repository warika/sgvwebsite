<template lang="html">
  <div class="">
    <b-navbar toggleable="md" type="dark" variant="info" v-b-scrollspy:page sticky>
      <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Supgangvarl</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            :href="item.href"
            v-for="(item, i) in items">
            {{item.name}}
          </b-nav-item>
        </b-navbar-nav>
        <!-- <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">TH</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
      </b-collapse>
      </div>
    </b-navbar>

    <div
      class="container mt-5"
      id="page"
      style="position:relative;overflow-y:auto"
      :style="{'height': windowHeight + 'px'}">
      <Home id="home"></Home>

      <Product id="product"></Product>

      <About id="about"></About>
    </div>

  </div>
</template>

<script>
import Home from './Home.vue'
import Product from './Product.vue'
import About from './About.vue'
import Contact from './Contact.vue'

export default {
  data () {
    return {
      items:[
        {name:'Home', href: '#home'},
        {name:'About', href: '#about'},
        {name:'Product', href: '#product'},
      ],
      windowHeight: 800
    }
  },
  components: {
    Home,
    Product,
    About,
    Contact
  },
  mounted() {
    // this.$nextTick(() => {
    //   console.log(document.body.scrollHeight);
    //   this.windowHeight = screen.height
    //   window.addEventListener('resize', () => {
    //     this.windowHeight = screen.height
    //   });
    // })
  },
}
</script>

<style lang="css" scoped>
#page::-webkit-scrollbar {
    display: none;
}
</style>
