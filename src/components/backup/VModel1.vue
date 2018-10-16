<template lang="html">
  <section class="bg-light" id="portfolio">


    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase" :quey="code">{{code}}</h2>
          <h3 class="section-subheading text-muted">Make Your Home Better.</h3>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">
            {{detail.name}}
          </h2>
          <h3 class="section-subheading text-muted">
            {{detail.detail}}
          </h3>
        </div>
      </div> -->

    </div>
  </section>

</template>

<script>
export default {
     props: ['code']
//   props: ['detail'],
//   data () {
//     return {
//
//     }
//   },
//   // methods: {
//   //   changeData () {
//   //     this.$emit('change', 'F40')
//   //   },
//   //   goBack () {
//   //     console.log("Back");
//   //     this.$emit('back', {message: 'may i'})
//   //   }
//   // },
}
</script>

<style lang="css">
</style>
