<template lang="html">
  <div>
    <div class="row">

        <b-card header="Filter "
                header-tag="header"
                >
                <div class="filter-content">
            			<div class="card-body">
            			  <form>
              				<label class="form-check">
              				  <input class="form-check-input" type="checkbox" value="">
              				  <span class="form-check-label">
              				    tile trim
              				  </span>
              				</label> <!-- form-check.// -->
              				<label class="form-check">
              				  <input class="form-check-input" type="checkbox" value="">
              				  <span class="form-check-label">
              				    stair nosing
              				  </span>
              				</label>  <!-- form-check.// -->
              				<label class="form-check">
              				  <input class="form-check-input" type="checkbox" value="">
              				  <span class="form-check-label">
              				    skirting board
              				  </span>
              				</label>  <!-- form-check.// -->
            			  </form>

            			</div> <!-- card-body.// -->
		              </div>
            <b-button href="#"variant="success">find</b-button>
            <b-button type="reset" variant="danger" @click="resetData">Reset</b-button>
        </b-card>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    resetData(e) {
    
    },
  }
}
</script>

<style lang="css">
</style>
