<template>
  <div class="login py-5">
    <h1 class="section-header white">HI AGAIN</h1>
    <b-row>
    <div class="subtitle white"><p>New to NAVIC?&nbsp;</p><a href="/registration"><p class="navic-color">SIGN UP</p></a></div>
    </b-row>
    <form @submit.prevent="pressed">
      <div class="login proformmain">
        <b-form-group id="email" label="Email Address*" label-for="email">
        <b-form-input
          id="email"
          v-model="email"
          placeholder="Your Email Address"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="password" label="Password*" label-for="password">
        <b-form-input
         type="password"
          id="password"
          v-model="password"
          placeholder="***********"
          required
        ></b-form-input>
      </b-form-group>
      </div>
      <button class="btn-black">Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import '@firebase/auth'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    pressed () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data)
          this.$router.replace({ name: 'student' })
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
font-size: 12px;
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
font-weight: 400;
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
</style>
