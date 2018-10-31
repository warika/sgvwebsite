<template lang="html">
  <div class="">
    <ul class="list-group list-group-flush">
      <li class="list-group-item custom-margin" v-for="n in 3">
        <a href="#" @click.prevent="emitModel('L38')" class="text-success">
          L38
        </a>,
        <a href="#" @click.prevent="emitModel('L38SS')" class="text-success">
          L38SS
        </a>&nbsp;
        <a href="#" @click.prevent="emitModel('L38SS')">
          รายละเอียด
        </a><br>
        <small>
          - ใช้สำหรับ หกดกหดกหsdfsdfdsfdsfds <br>
          กดเดเดกเsdfdsfdsfdsfdsfdsfdsf
        </small>
      </li>
    </ul>
  </div>

</template>

<script>
import ProductGroupModelDetail from './ProductGroupModelDetail.vue'

export default {
  data () {
    return {
      // models:[
      //   {code:3, name:'G30', photo:'img/portfolio/03-thumbnail.png', to: '/product/G30', detail: 'ใช้กับกระเบื้อง 8x8'},
      //   {code:3, name:'D30', photo:'img/portfolio/03-thumbnail.png', to: '/product/D30', detail: 'ใช้กับกระเบื้อง 8x8'},
      //   {code:3, name:'F40', photo:'img/portfolio/03-thumbnail.png', to: '/product/F40', detail: 'ใช้กับกระเบื้อง 8x8'},
      //   {code:3, name:'W60', photo:'img/portfolio/03-thumbnail.png', to: '/product/W60', detail: 'ใช้กับกระเบื้อง 8x8'},
      //   {code:1, name:'F40', photo:'img/portfolio/03-thumbnail.png', to: '/product/F40', detail: 'ใช้กับกระเบื้อง 8x8'},
      //   {code:1, name:'W60', photo:'img/portfolio/03-thumbnail.png', to: '/product/W60', detail: 'ใช้กับกระเบื้อง 8x8'}
      // ]
    }
  },
  methods: {
    emitModel(model) {
      this.$emit('select', model)
    }
  },
  components: {
    ProductGroupModelDetail
  }
}
</script>

<style lang="css" scoped>
.custom-margin {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>
