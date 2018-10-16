<template lang="html">
  <div>
  <div class="col-lg-12 text-center">
        <h2 class="section-heading">PVC Tile Trim</h2>
        <h3 class="section-subheading text-muted"> Make Your Home Better .</h3>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="(model, i) in models" :key="i">
      <div class="card custom-height">

        <img class="card-img-top photo-height pointer" :src="model.photo" alt="Card image cap" @click="show">
        <div class="card-body">
          <p class="card-text">
            {{model.name}}
            <modal
              name="hello-world"
              adaptive
              draggable
              height="auto"
              :clickToClose="false">
              <b-card no-body
            style="max-width: 20rem;"
            img-src="https://placekitten.com/380/200"
            img-alt="Image"
            img-top>
        <h4 slot="header">Hello World</h4>
        <b-card-body>
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
              </b-card-body>
              <b-list-group flush>
                  <b-list-group-item>Cras justo odio</b-list-group-item>
                  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                  <b-list-group-item>Vestibulum at eros</b-list-group-item>
              </b-list-group>
              <b-card-body>
                  <a href="#"
                     class="card-link" @click.prevent="hide">close</a>
                  <a href="#"
                     class="card-link">Another link</a>
              </b-card-body>
              <b-card-footer>This is a footer</b-card-footer>
              <b-card-img src="https://placekitten.com/480/210"
                          alt="Image"
                          bottom></b-card-img>
              </b-card>

              <!-- <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link" @click.prevent="hide">Close</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div> -->
            </modal>
          </p>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: this.$route.params.code,
      detail: {},
      models:[
        {code:3, name:'G30', photo:'img/portfolio/03-thumbnail.png'},
        {code:3, name:'D30', photo:'img/portfolio/03-thumbnail.png'},
        {code:3, name:'F40', photo:'img/portfolio/03-thumbnail.png'},
        {code:3, name:'W60', photo:'img/portfolio/03-thumbnail.png'}
      ],
    }
  },
  computed: {
    modelsGroup() {
      let group = this.groups.find(v => v.code == this.code)
      let models = this.models.filter(v=> v.code === this.code)
      group.children = models
      return group
    }
  },
  methods: {
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    },
    showDialog () {
      this.$modal.show('dialog', {
        title: 'Alert!',
        text: 'You are too awesome',
        buttons: [
          {
            title: 'Deal with it',
            handler: () => { alert('Woot!') }
          },
          {
            title: '',       // Button title
            default: true,    // Will be triggered by default if 'Enter' pressed.
            handler: () => {} // Button click handler
          },
          {
            title: 'Close'
          }
       ]
      })
    },
    updateData (data) {
      this.name = data
    },
    goBack () {
      // this.$router.go(-1)
    },
    getGroups () {
      let found = this.groups.find(v => v.code == this.code)
      if (!found) return this.goBack()
      this.detail = found
    }
  },
  created() {
    this.getGroups()
  }
}
</script>

<style lang="css" scoped>
.section-heading {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 15px;
}
.section-subheading {
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 75px;
  text-transform: none;
  font-family: 'Droid Serif';
}
.sub-title {
   opacity: 0.5;
}
.custom-height {
  height: 300px;
}
.photo-height {
  height: 200px;
  padding: 10px 10px 10px 10px;
}
</style>
