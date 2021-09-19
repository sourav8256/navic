<template>
  <b-container fluid class="form-main">
      <h1 class="section-head white">SAY HI</h1>
      <div class="formbody">
 <b-form @submit="onSubmit" @reset="onReset" v-if="show">
   <div class="row">
     <div class="col">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>
     </div>
      <div class="col">
           <b-form-group
        id="input-group-1"
        label="Email address"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      </div>
   </div>
      <b-form-group id="input-group-5" label="Subject" label-for="input-5">
        <b-form-input
          id="input-4"
          v-model="form.message"
          placeholder="Enter Subject"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Your Message" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.message"
          placeholder="Enter Message"
          required
        ></b-form-input>
      </b-form-group>
<!----
      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
--->
<b-row>
  <b-col>
  </b-col>
    <b-col class="py-2">
       <b-button type="submit" class="btn-black">Submit</b-button>
  </b-col>
    <b-col>
  </b-col>
</b-row>
     <!--  <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
      </div>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        message: ''
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.message = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
.form-main{
    background: #242728;
    color:white;
    align-items: center;
    text-align: left;
    padding: 10px;
}
.formbody{
  margin:0px 300px;
}
.form-control{
background: #242728;
}
#input-5{
  height: 200px;
}
</style>
