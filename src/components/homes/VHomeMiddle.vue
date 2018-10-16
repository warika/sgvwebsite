<template lang="html">
  <div class="container">
    <h1 class="section-heading">Hot Items</h1>
    <div class="row">
      <div class="col-12 col-md-4" v-for="item in items">
        <b-card-group>
          <b-card
            :title="item.text"
            :img-src="item.photo"
            img-alt="Img"
            img-top>
              <p class="card-text">
                qqqqqqqqqqqqqqqqqqqqqq
                qqqqqqqqqqqqqqqqqqqqq
                qqqqqqppppppppppppppp
                pppppppppppppppp
                qqqqqq
              </p>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        { photo:'img/portfolio/08-thumbnail.png',text:'CT6'},
        { photo:'img/portfolio/08-thumbnail.png',text:'CT10'},
        { photo:'img/portfolio/08-thumbnail.png',text:'G30'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
