<template>
<b-container fluid>
    <form @submit.prevent="pressed">
          <div class="login proformmain">
              <b-form-group id="fname" label="Full Name*" label-for="name">
        <b-form-input
          id="name"
          v-model="user.fname"
          placeholder="Your Full Name"
          required
        ></b-form-input>
      </b-form-group>
                    <b-form-group id="phoneno" label="Phone no.*" label-for="phoneno">
        <b-form-input
          id="phoneno"
          v-model="user.phoneno"
          placeholder="9876543210"
          required
        ></b-form-input>
      </b-form-group>
        <b-form-group id="email" label="Email Address*" label-for="email">
        <b-form-input
          id="email"
          v-model="user.email"
          placeholder="Your Email Address"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="password" label="Password*" label-for="password">
        <b-form-input
         type="password"
          id="password"
          v-model="user.password"
          placeholder="***********"
          required
        ></b-form-input>
      </b-form-group>
    <b-form-group class="formcourse" label="Course Interested in:" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="radio-group-1"
        v-model="user.course"
        :aria-describedby="ariaDescribedby"
        name="radio-sub-component"
      >
        <b-form-radio value="evolve">Evolve I, II & III</b-form-radio>
        <b-form-radio value="evolveprep">Evolve Prep</b-form-radio>
        <b-form-radio value="evolvego">Evolve Go</b-form-radio>
        <b-form-radio value="evolvepro">Evolve Pro</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
      </div>
      <button class="btn-black">Sign Up</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    </b-container>
</template>
<script>
import { db } from '../plugins/firebase'
import firebase from 'firebase/app'
import '@firebase/auth'
export default {
  data () {
    return {
      user: {
        fname: '',
        email: '',
        password: '',
        course: '',
        phoneno: '',
        error: ''
      }
    }
  },
  methods: {
    pressed () {
      db.collection('user').add(this.user).then(() => {
        this.user.fname = ''
        this.user.email = ''
        this.user.password = ''
        this.user.phoneno = ''
        this.user.course = ''
      })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          alert('User successfully created!')
          console.log(data)
          this.$router.push({ name: 'evolveGo' })
        })
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>
<style  scoped>
.login {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.subtitle{
font-family: Now;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
display:inline-flex;
color:white;
}
div {
  color: inherit;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input {
  width: 600px;
  padding: 30px;
  margin: 0px;
  font-size: 21px;
}
@media only screen and (max-width: 768px){
  input{
    width: auto;
  }
}
@media only screen and (max-width: 768px){
  .formcourse{
  padding: 0rem 0rem 0rem 4rem;
  }
}
.error {
  color: red;
}
.sub-text{
font-family: Brandon Grotesque;
font-size: 24px;
font-style: normal;
font-weight: 390;
line-height: 55px;
letter-spacing: 0em;
text-align: center;
}
.proformmain{
    background: #242728;
    color:white;
    align-items: center;
    text-align: left;
    padding: 0px;
    font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 20px;
margin:20px 120px;
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
.custom-checkbox{
    align-items: center;
    align-self: center;
font-family: NowThin;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:aqua;
margin:10px;
padding:10px;
}
.customform{
    padding: 50px;
}
.form-main{
    background: #242728;
    color:white;
    align-items: center;
    text-align: left;
    padding: 50px;
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
