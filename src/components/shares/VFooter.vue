<template lang="html">

    <footer class=" panel-footer bg-dark">
      <div class="container ">
        <div class="row">
          <div class="col-md-12 text-center pt-3">
            <a v-for="icon in icons" class="mr-3">
              <v-social :type="icon"></v-social>
            </a>
          </div>
        </div>
      </div>
    </footer>


</template>

<script>
export default {
  data () {
    return {
      icons: [
        'facebook',
        'line',
        'linkedin',
        'youtube'
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.panel-footer{
    height:100px;


}
/* footer {
  position: absolute;
  bottom: 0;
  height:60px;
  width: 100%;
} */
</style>
