<template lang="html">
  <!-- <b-navbar class="" variant="warning" sticky>
    <div class="table-responsive">
      <table class="table table-borderless">
        <thead>
          <tr>
            <td v-for="(item, i) in items" class="text-center">
              <router-link
                v-if="item.to"
                :to="item.to"
                :key="i" tag="a"
                active-class="text-primary">
                <v-social :type="item.icon" :link="true"></v-social><br>
                {{item.text}}
              </router-link>

              <span v-else>
                <v-social :type="item.icon" :link="true"></v-social><br>
                {{item.text}}
              </span>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </b-navbar> -->
</template>

<script>
export default{
  data (){
    return {
      items: [
        {text:'Home', icon:'home' , to: {name: 'home'}},
        {text:'Product', icon:'product', to: {name: 'product'}},
        {text:'Telephone',icon:'telephone'},
        {text:'Line', icon:'line'},
        {text:'Facebook', icon:'facebook'},
        {text:'location', icon:'location'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.text-small{
  font-size: 10px;
  color: #fff;

}
.shadow {

}
.nav-font{
  font-family: 'Anton', sans-serif;
  font-weight: 35px;
}

::-webkit-scrollbar {
  display: none;
}
</style>
