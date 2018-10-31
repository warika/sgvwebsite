<template lang="html">
  <div class="bg-light">
    <div class="container pt-5">
      <v-header title="Contact" subtitle="Make Your Home Better ."></v-header>

      <div class="col-12">
        <b-card>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15513.029936300672!2d100.685474!3d13.5810746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88cfaf3b53448889!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4l-C4o-C4seC4nuC4ouC5jOC4geC4seC4h-C4p-C4suC4pSDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1539069789035" width="1035" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
          <b-card-group deck>
                <b-card>
                  <div id="contact-form" class="contact-form" v-for="comdetail in comdetails">
                    <h1 class="contact-form_title">Address</h1>
                    <div class="separator"></div>
                    <VAddress></VAddress>

                  </div>
                </b-card>
                <b-card>
                  <div id="contact-form" class="contact-form">
                    <h1 class="contact-form_title">Leave Message</h1>
                    <div class="separator"></div>
                    <form class="form">
                			<input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
                      <input required name="phoneno" v-model="contact.phoneno" placeholder="Phone No" type="text" autocomplete="off">
                			<input name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
                			<textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
                		   <!-- <button class="button">Send</button> -->
                		</form>
                    <p class="text-center">
                      <b-button type="submit" variant="light" @click="submit">Submit</b-button>
                      <b-button type="reset" variant="danger" @click="resetData">Reset</b-button>
                    </p>

                      </div>
                </b-card>
            </b-card-group>

        </b-card>
      </div>
    </div>
  </div>
  <!-- <div> -->
    <!-- <button type="button" name="button" @click="show = !show">Run</button>
    <transition name="slide-fade">
      <div class="box" v-if="show"></div>
    </transition>

    <div class="" style="display:flex;justify-content:center;">
      <svg viewbox="0,0 10,10" width="500px" height="500px">
        <path
          class="track"
          fill="none"
          stroke-width="0.25"
          d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
        />
        <circle class="marker" r="1" fill="orange"></circle>
      </svg>
    </div> -->
  <!-- </div> -->


</template>

<script>
import VAddress from '@/components/shares/VAddress.vue'
export default {
  data () {
    return {
      // show: true
      fromadddata:'',
      contact: {
        name: '',
        phoneno: '',
        email: '',
        message: '',
      },
      show:true,
      comdetails:[
        {add:'46/9 Moo21 Bangpleeyai, Bangplee Samutprakarn 10540',
         tel:'Tel. 66 2346 5284 Hot Fax. 66 2346 5287',
         email:'Email. success@supgangvarl.co.th'
        }
      ]
    }
  },
  methods:{
    resetData(e) {
      e.preventDefault();
      /* Reset our form values */
      this.contact.name = '';
      this.contact.phoneno = '';
      this.contact.email = '';
      this.contact.message = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    submit(data) {
      this.contact = this.fromadddata
    }
  },
  components:{
    VAddress
  }

}

</script>

<style lang="css" scoped>



.contact-form {
	font-family: 16px;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
}

.contact-form .separator {
	border-bottom: solid 1px #ccc;
	margin-bottom: 15px;
}

.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}

.contact-form_title {
	color: #333;
	text-align: left;
	font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
	border: solid 1px #e8e8e8;
	font-family: 'Roboto', sans-serif;
	padding: 10px 7px;
	margin-bottom: 15px;
	outline: none;
}

.contact-form textarea {
	resize: none;
}

.contact-form .button {
	background: #da552f;
	border: solid 1px #da552f;
	color: white;
	cursor: pointer;
	padding: 10px 50px;
	text-align: center;
	text-transform: uppercase;
}

.contact-form .button:hover {
	background: #ea532a;
	border: solid 1px #ea532a;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	font-size: 15px;
	border-radius: 3px
}
/* .box {
  width: 100px;
  height: 100px;
  background-color: green;
  transform: translate(100px, 100px);
}

.track {
  stroke: #ccc;
}

.marker {
  motion-path: path('M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0');
  offset-path: path('M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0');
  animation: move 3s linear infinite;
}

@keyframes move {
  100% {
    motion-offset: 100%;
    offset-distance: 100%;
  }
}

.slide-fade-enter {
  background-color: yellow;
  transform: translate(0px, 0px);
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-to {
  opacity: 0;
  background-color: red;
} */
</style>
