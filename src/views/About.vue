<template lang="html">
  <div class="bg-primary" style="min-height: 100vh;">
    <div class="container pt-5">
      <v-header title="About Us" subtitle="Make Your Home Better ."></v-header>

      <div class="row text-center">
        <div class="col-md-4" v-for="(headicon, i) in headicons" :key="i">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-danger"></i>
            <i :class="headicon.img"></i>
          </span>
          <h4>{{headicon.title}}</h4>
          <p class="sub-title">{{headicon.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      headicons: [
        {title: 'name 1', name:'Aluminium Tile Trim', img:'fas fa-industry fa-stack-1x fa-inverse'},
        {title: 'name 1', name:'Aluminium Tile Trim', img:'fas fa-building fa-stack-1x fa-inverse'},
        {title: 'name 1', name:'Aluminium Tile Trim', img:'fas fa-home fa-stack-1x fa-inverse'},
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
