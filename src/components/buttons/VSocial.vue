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
        image: {icon:'fas fa-image text-success'},
        line: {icon:'fab fa-line'},
        facebook: {icon:'fab fa-facebook-f', link:'https://www.facebook.com/Supgangvarl-1350677818365777'},
        linkedin: {icon:'fab fa-linkedin-in'},
        instagram: {icon:'fab fa-instagram'},
        youtube: {icon:'fab fa-youtube', link:'https://www.youtube.com/channel/UCDswY6u3GmYDyhy7Ay3UX9w?view_as=subscriber'},
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
  color: #3b5998 !important;
}
.fa-facebook-f:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-linkedin-in {
  color: #00aced !important;
}
.fa-linkedin-in:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-instagram {
  color: #bc2a8d !important;
}
.fa-instagram:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-line {
  color: #4dc247 !important;
}
.fa-line:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
.fa-youtube {
  color: #fa0000 !important;
}
.fa-youtube:hover {
  text-shadow: 0 0 15px #fff;
  transition: all 0.5s ease;
}
</style>
