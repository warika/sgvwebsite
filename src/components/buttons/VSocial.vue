<template lang="html">
  <i :class="classMap" aria-hidden="true" @click="goto"></i>
</template>

<script>
export default {
  name: 'VSocial',
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: '2'
    },
    link: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return{
      items: {
        info: {icon:'fas fa-info text-success'},
        image: {icon:'fas fa-image text-success'},
        line: {icon:'fab fa-line',link:'https://line.me/ti/p/SXYCePOwO9'},
        facebook: {icon:'fab fa-facebook-f', link:'https://www.facebook.com/Supgangvarl-1350677818365777'},
        linkedin: {icon:'fab fa-linkedin-in'},
        instagram: {icon:'fab fa-instagram'},
        youtube: {icon:'fab fa-youtube', link:'https://www.youtube.com/channel/UCDswY6u3GmYDyhy7Ay3UX9w?view_as=subscriber'},
        product: {icon:'fas fa-box-open'},
        telephone: {icon:'fas fa-phone',link:'tel:+66869998382'},
        home: {icon:'fas fa-home'},
        location: {icon:'fas fa-map-marker-alt', link:'https://www.google.co.th/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C%E0%B8%81%E0%B8%B1%E0%B8%87%E0%B8%A7%E0%B8%B2%E0%B8%A5+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/@13.5804109,100.6872253,15.17z/data=!4m5!3m4!1s0x0:0x88cfaf3b53448889!8m2!3d13.5810746!4d100.685474'}
      }
    }
  },
  computed: {
    classMap () {
      return [this.items[this.type].icon, `fa-${this.size}x`].join(' ')
    }
  },
  methods: {
    goto () {
      if (this.link && this.items[this.type].link) {
        window.open(this.items[this.type].link)
      } else {
        this.$emit('click', null)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.fa-facebook-f {
  color: #fff !important;
}
.fa-facebook-f:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-linkedin-in {
  color: #fff !important;
}
.fa-linkedin-in:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-instagram {
  color: #fff !important;
}
.fa-instagram:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-line {
  color: #fff !important;
}
.fa-line:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-youtube {
  color: #fff !important;
}
.fa-youtube:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-home {
  color: #fff !important;
}
.fa-home:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-box-open {
  color: #fff !important;
}
.fa-box-open:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-phone {
  color: #fff !important;
}
.fa-phone:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-map-marker-alt {
  color: #fff !important;
}
.fa-map-marker-alt:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}

</style>
