import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '555',
    groups: [
      {code: 1, name:'Aluminium Tile Trim', photo:'img/portfolio/01-thumbnail.png', page: '/product/aluminiumtiletrim', show: false},
      {code: 2, name:'Aluminium Stair Nosing', photo:'img/portfolio/02-thumbnail.png ', page: '/product/aluminiumstairnosing', show: false},
      {code: 3, name:'PVC Tile Trim', photo:'img/portfolio/03-thumbnail.png', page: '/product/pvctiletrim', show: false},
      {code: 4, name:'PVC UV Coat Tile Trim', photo:'img/portfolio/04-thumbnail.png', page: '/product/pvcovcoattiletrim', show: false},
      {code: 5, name:'PVC Stair Nosing', photo:'img/portfolio/05-thumbnail.png', page: '/product/pvcstairnosing', show: false},
      {code: 6, name:'PVC Chamfer', photo:'img/portfolio/06-thumbnail.png', page: '/product/pvcchamfer', show: false},
      {code: 7, name:'PVC Groove', photo:'img/portfolio/07-thumbnail.png', page: '/product/pvcgroove', show: false},
      {code: 8, name:'PVC Corner Bead', photo:'img/portfolio/08-thumbnail.png', page: '/product/pvccornerbead', show: false},
      {code: 9, name:'PVC Skirting Board', photo:'img/portfolio/09-thumbnail.png', page: '/product/pvcskirtingboard', show: false},
      {code: 10, name:'PVC Wire Way', photo:'img/portfolio/10-thumbnail.png', page: '/product/pvcwireway', show: false},
      {code: 11, name:'PVC Multi-Purpose Mat', photo:'img/portfolio/11-thumbnail.png', page: '/product/pvcmultipurposemat', show: false}
    ]
  },
  mutations: {

  },
  actions: {

  }
})
