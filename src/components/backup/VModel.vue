<template lang="html">
  <section class="bg-light" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">{{detail.name}}</h2>
          <h3 class="section-subheading text-muted">Make Your Home Better.</h3>
        </div>
      </div>
      <div class="row" >
        <div class="col-md-3 col-sm-6 portfolio-item" v-for="child in detail.children">

            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-2x"></i>
              </div>
            </div>
  <p><a class="button">Click Me</a></p>


            <img  :src="child.photo" width="250px" height="200px" alt="">
          <div class="portfolio-caption">
            <h4>{{child.name}}</h4>
          </div>
        </div>
      </div>
        <button type="button" name="button" @click="goBack">Back</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ['detail'],
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="css">
</style>
