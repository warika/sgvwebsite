<template lang="html">
  <div>
    <b-carousel
    style="text-shadow: 1px 1px 2px #333;"
    controls
    indicators
    background="#ababab"
    :img-width="width"
    :img-height="height"
    v-model="slide"
    :interval="interval"
    >

      <b-carousel-slide
        v-for="(image, i) in images"
        v-touch:swipe.left="swipeLeft"
        v-touch:swipe.right="swipeRight"
        :img-src="image.src">
         <h1>{{image.text}}</h1>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'VSwipe',
  props: {
    images: {
      type: Array,
      required: true
    },
    value: {
      type: Boolean
    },
    interval: {
      type: Number,
      required: false,
      default: 0
    },
    width: {
      type: String,
      required: false,
      default: '100'
    },
    height: {
      type: String,
      required: false,
      default: '100'
    }
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    swipeLeft () {
      if (this.slide >= this.images.length - 1) {
        this.slide = 0
      } else {
        this.slide = this.slide + 1
      }
    },
    swipeRight () {
      if (this.slide === 0) {
        this.slide = this.images.length - 1
      } else {
        this.slide = this.slide - 1
      }
    }
  }
}
</script>

<style lang="css">
</style>

<!--


<template lang="html">
  <div>
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide v-for="(image, i) in images" :key="i" :class="getSlideClass(i)">
        <b-img :src="image" fluid alt="Responsive image" />
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>

    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide v-for="(image, i) in images" :key="i" :class="getSlideClass(i)">
        <b-img :src="image" fluid @click="setSlide(i)" alt="Responsive image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    value: {
      type: Boolean
    }
  },
  data () {
    return {
      show: false,
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 2, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    }
  },
  methods: {
    getSlideClass(i) {
      let result = 'slide-'+ (i + 1)
      return [result]
    },
    setSlide(i) {
      this.$refs.swiperTop.swiper.slideTo(i, 200, false)
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="css">
</style> -->
