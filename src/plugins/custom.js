import VSwipe from '@/components/carousel/VSwipe.vue'
import VYoutube from '@/components/carousel/VYoutube.vue'

import VHeader from '@/components/shares/VHeader.vue'

import VSocial from '@/components/buttons/VSocial.vue'

import VHomeHeader from '@/components/homes/VHomeHeader.vue'
import VHomeMiddle from '@/components/homes/VHomeMiddle.vue'
import VHomeLower from '@/components/homes/VHomeLower.vue'
import VHomeMiddleLower from '@/components/homes/VHomeMiddleLower.vue'

const myPlugin = {
  install (Vue) {
    Vue.component('v-swipe', VSwipe)
    Vue.component('v-youtube', VYoutube)

    Vue.component('v-header', VHeader)

    Vue.component('v-social', VSocial)

    Vue.component('v-homeheader', VHomeHeader)
    Vue.component('v-homemiddle', VHomeMiddle)
    Vue.component('v-homelower', VHomeLower)
    Vue.component('v-homemiddlelower', VHomeMiddleLower)

  }
}

export default myPlugin
