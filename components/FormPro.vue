<template>
  <b-container fluid >
      <h3 class="formhead ">Connect with our curriculum guide</h3>
      <div class="proformmain m-1">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Your Email Address"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Your name"
          required
        ></b-form-input>
      </b-form-group>
            <b-form-group id="input-group-3" label="Subject" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.subject"
          placeholder="Subject"
          required
        ></b-form-input>
      </b-form-group>
            <b-form-group id="input-group-4" label="Enquiry" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.query"
          placeholder="Type your message here.."
          required
        ></b-form-input>
      </b-form-group>
<b-row>
    <b-col cols="" align-self="start"></b-col>
    <b-col cols="" align-self="center" class="px-2 pb-4">
      <a href="\evolvePro\customize"><b-button class="btn-black" type="submit"> Submit </b-button></a>
    </b-col>
    <b-col cols="" align-self="end"></b-col>
  </b-row>
    </b-form>
      </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
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
.proformmain{
    background: #242728;
    color:white;
    align-items: center;
    text-align: left;
    padding: 0px;
    font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
}
.formbody{
  margin:0px 300px;
}
.form-control{
background: #242728;
}
#input-4{
  height: 80px;
}
.formhead{
   font-family: Brandon Grotesque;
font-style: normal;
font-weight: 420;
font-size: 22px;
line-height: 27px;
/* or 135% */

display: flex;
align-items: center;
text-align: center;
}
</style>
