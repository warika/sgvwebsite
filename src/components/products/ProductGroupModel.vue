<template lang="html">
  <div class="">
    <ul class="list-group list-group-flush " v-if="group.show">
      <li class="list-group-item " v-for="model in modelByGroup(group.code)">
        <a href="#" @click.prevent="showModal(model.name)" class="text-success">
          {{model.name}}
        </a>
        : {{model.detail}}
      </li>
      <li class="list-group-item">
        <button type="button" class="btn btn-light btn-block" @click="group.show = false">
          Back
        </button>
      </li>
    </ul>

    <b-modal
      lazy
      centered
      v-model="show"
      :title="selectedName"
      hide-footer>
      <ProductDetail :code="selectedName"></ProductDetail>
    </b-modal>
  </div>

</template>

<script>
import ProductDetail from './ProductDetail.vue'
export default {
  props: ['group'],
  data () {
    return {
      selectedName: '',
      show: false,
      models:[
        {code:3, name:'G30', photo:'img/portfolio/03-thumbnail.png', to: '/product/G30', detail: 'ใช้กับกระเบื้อง 8x8'},
        {code:3, name:'D30', photo:'img/portfolio/03-thumbnail.png', to: '/product/D30', detail: 'ใช้กับกระเบื้อง 8x8'},
        {code:3, name:'F40', photo:'img/portfolio/03-thumbnail.png', to: '/product/F40', detail: 'ใช้กับกระเบื้อง 8x8'},
        {code:3, name:'W60', photo:'img/portfolio/03-thumbnail.png', to: '/product/W60', detail: 'ใช้กับกระเบื้อง 8x8'},
        {code:1, name:'F40', photo:'img/portfolio/03-thumbnail.png', to: '/product/F40', detail: 'ใช้กับกระเบื้อง 8x8'},
        {code:1, name:'W60', photo:'img/portfolio/03-thumbnail.png', to: '/product/W60', detail: 'ใช้กับกระเบื้อง 8x8'}
      ]
    }
  },
  methods: {
    showModal (name) {
      this.selectedName = name
      this.show = true
    },
    modelByGroup(code){
      let result = this.models.filter(v=>{
        return v.code === code
      })
      return result
    }
  },
  components: {
    ProductDetail
  }
}
</script>

<style lang="css" scoped>

</style>
