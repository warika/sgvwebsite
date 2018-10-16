import VButtonArrow from '@/components/buttons/VButtonArrow.vue'
import VButton from '@/components/buttons/VButton.vue'
import VSwipe from '@/components/carousel/VSwipe.vue'
import VSocialMedia from '@/components/buttons/VSocialMedia.vue'
import VFooter from '@/components/VFooter.vue'
import SampleCardImage from '@/components/samples/SampleCardImage.vue'
import VHomeHeader from '@/components/homes/VHomeHeader.vue'
import VHomeMiddle from '@/components/homes/VHomeMiddle.vue'
import VHomeLower from '@/components/homes/VHomeLower.vue'

const myPlugin = {
  install (Vue) {
    Vue.component('v-button', VButton)
    Vue.component('v-button-arrow', VButtonArrow)
    Vue.component('v-swipe', VSwipe)
    Vue.component('v-socialmediabutton', VSocialMedia)
    Vue.component('v-footer', VFooter)
    Vue.component('sample-card-image', SampleCardImage)
    Vue.component('v-homeheader', VHomeHeader)
    Vue.component('v-homemiddle', VHomeMiddle)
    Vue.component('v-homelower', VHomeLower)
  }
}

export default myPlugin
