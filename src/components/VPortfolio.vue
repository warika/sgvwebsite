<template lang="html">
  <section class="bg-light" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase text-success">Productfff</h2>
          <h3 class="section-subheading text-muted">Make Your Home Better.</h3>
        </div>
      </div>
      <div class="row" >
        <div class="col-md-3 col-sm-6 portfolio-item" v-for="group in groups">
          <router-link :to="{ name: 'product', params: {code: group.code} }" class="portfolio-link">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img  :src="group.photo" width="250px" height="200px" alt="">
          </router-link>
          <div class="portfolio-caption">
            <h4>{{group.name}}</h4>
            <!-- <p class="text-muted">Illustration</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  data (){
    return {
      groups:[
        {code: 1, name:'Aluminium Tile Trim', photo:'img/portfolio/01-thumbnail.png'},
        {code: 2, name:'Aluminium Stair Nosing', photo:'img/portfolio/02-thumbnail.png'},
        {code: 3, name:'PVC Tile Trim', photo:'img/portfolio/03-thumbnail.png'},
        {code: 4, name:'PVC UV Coat Tile Trim', photo:'img/portfolio/04-thumbnail.png'},
        {code: 5, name:'PVC Stair Nosing', photo:'img/portfolio/05-thumbnail.png'},
        {code: 6, name:'PVC Chamfer', photo:'img/portfolio/06-thumbnail.png'},
        {code: 7, name:'PVC Groove', photo:'img/portfolio/07-thumbnail.png'},
        {code: 8, name:'PVC Corner Bead', photo:'img/portfolio/08-thumbnail.png'},
        {code: 9, name:'PVC Skirting Board', photo:'img/portfolio/09-thumbnail.png'},
        {code: 10, name:'PVC Wire Way', photo:'img/portfolio/10-thumbnail.png'},
        {code: 11, name:'PVC Multi-Purpose Mat', photo:'img/portfolio/11-thumbnail.png'}
      ],
    }

  }
}
</script>

<style lang="css" scoped>

</style>
