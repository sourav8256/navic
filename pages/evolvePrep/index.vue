<template>
    <b-container fluid class="level1 bg">
    <h1 class="section-header white py-4" > EVOLVEPrep </h1>
<b-row class="">
<b-col cols="8">
  <b-row>
    <b-col>
      <ul>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Batch limit -5 students </li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> 5 day program</li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> 2 Live projects</li>
      </ul> </b-col>
      <b-col><ul>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Live Interactive Sessions</li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Segregated Q&A sessions</li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Individual student feedback</li>
      </ul>
      </b-col>
  </b-row>
  <b-row class="courseboxleft">
    <h3>ABOUT</h3>
    <p>Getting ready<br>
Just graduated? Changing industries to enter marketing? This one is for you. We’ve created a 4-hour workshop for you to be ready for any and all challenges entering into the marketing eco-system. From tackling the interview and assignments to finding your passion, we help you make the decision that’s right for you.
 </p>
<p>
<br>Next Batch: <b-icon icon="calendar3" variant="info"></b-icon>  Starting 1st August 2020 <b-icon icon="clock-history" variant="info"></b-icon>  6:30 to 7:30 PM, IST. </p>
  </b-row>
</b-col>
<b-col cols="4" class="coursebar">
  <div class="seatsleft">
    <h2 class="navic-color"> 5/10 <br> SEATS LEFT</h2>
    <b-progress height="2rem" width="2rem" :value="50" variant="info" striped :animated="animate" class="mt-2"></b-progress>
    <br>
    <br>
    <h4> STARTS IN </h4>
      <b-button class="seatbutton"> DAYS: <br>11</b-button>
      <b-button class="seatbutton"> HOUR: <br>12</b-button>
      <b-button class="seatbutton"> MINS: <br>03</b-button>
      <br>
      <br>
      <h2 class="navic-color">₹4990</h2>
      <b-button class="btn-black"> ENROLL NOW </b-button>
  </div>
</b-col>
</b-row>
  <h2 class="center">CURRICULUM STRUCTURE</h2>
<div class="blackbar"><p class="navic-color aquatext"> DAY 1:</p> <p>Introduction + The job market in India + Finding your focus</p></div>
<div class="blackbar"><p class="navic-color aquatext"> DAY 2:</p> <p>The Resume</p></div>
<div class="blackbar"><p class="navic-color aquatext"> DAY 3:</p> <p>The Interview</p></div>
<div class="blackbar"><p class="navic-color aquatext"> DAY 4:</p> <p>The Assignment</p></div>
<div class="blackbar"><p class="navic-color aquatext"> DAY 5:</p> <p>Audits, grades and Q&A</p></div>
<div class="coursebottom">
    <h4> STARTS IN </h4>
  <br>
      <b-button class="seatbutton"> DAYS: <br>01</b-button>
      <b-button class="seatbutton"> HOURS: <br>02</b-button>
      <b-button class="seatbutton"> MINS: <br>03</b-button>
      <br>
      <br>
      <h2 class="navic-color">₹4990</h2>
      <br>
      <b-button class="btn-black"> ENROLL NOW </b-button>
</div>
<h2 class="center py-6"> Who is EVOLVEPrep made for? </h2>
<div class="for center py-4">
  <b-img src="~/assets/pro.svg"></b-img>
  <b-img src="~/assets/stu.svg"></b-img>
</div>
    </b-container>
</template>

<script>
export default {

}
</script>

<style>
.level1{
  display: flexbox;
  color:white;
  padding:0px 100px;
}
ul {
  list-style-type: none;
}
li{
list-style-image: url ('.\assets\circle-ok.svg');
}
.coursebar{
  text-align: center;
}
.progress{
  border-radius: 20px;
}
.courseboxleft{
  text-align: left;
}
.coursebottom{
  text-align: center;
  padding: 20px;
}
.seatbutton{
background: #242728;
box-shadow: inset -4.8254px -4.8254px 4.8254px rgba(68, 68, 68, 0.25), inset 4.8254px 4.8254px 4.8254px rgba(2, 2, 2, 0.15);
border-radius: 48.254px;
}
.coursecard{
  text-align: center;
  padding: 20px 20px;
  margin:20px;
}
.card-title{
  font-size:18px;
}
.card-img{
  height:100px;
}
.for{
  align-content: center;
}
.blackbar{
  background: #242728;
box-shadow: inset -4px -4px 4px rgba(68, 68, 68, 0.25), inset 4px 4px 4px rgba(2, 2, 2, 0.15);
border-radius: 10px;
display: inherit;
text-align: center;
padding: 0px 50px;
margin:0px 100px;
}
.aquatext{
font-weight: 800;

}
</style>
