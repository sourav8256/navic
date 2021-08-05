<template>
    <b-container fluid class="level1 bg">
    <h1 class="section-header white py-4" > EVOLVE Level-I </h1>
<b-row class="">
<b-col cols="8">
  <b-row>
    <b-col>
      <ul>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Batch limit -10 students </li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> 10 Week Courses</li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> 5 practicals</li>
      </ul> </b-col>
      <b-col><ul>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Live Interactive Sessions</li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Segregated Q&A sessions</li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> 1-to-1 feedback</li>
      </ul>
      </b-col>
  </b-row>
  <b-row class="courseboxleft">
    <h3>ABOUT</h3>
    <p>Start<br>journey with Level 1 of the EVOLVE program to prepare and train yourself for the future of marketing. With a curated selection of 10 starter subjects, Level 1 aims to develop your curiosity and find up your marketing game whilst you learn and adapt to the ever-changing environment<br>
EVOLVE-I is created for marketers by marketers. In a rapidly changing communications industry, EVOLVE aims to work with limited batches and grow your understanding about the future of marketing. Whether you come from Advertising, Digital Marketing, Public Relations or social media marketing, EVOLVE will add value to your personal marketing journey. </p>
<p>*Recommended to take the courses in sequence.
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
      <b-button class="seatbutton"> DAYS: <br>01</b-button>
      <b-button class="seatbutton"> HOURS: <br>02</b-button>
      <b-button class="seatbutton"> MINS: <br>03</b-button>
      <br>
      <br>
      <h2 class="navic-color">₹14990</h2>
      <b-button class="btn-black"> ENROLL NOW </b-button>
  </div>
</b-col>
</b-row>
  <h2 class="center">MODULES IN THIS COURSE</h2>
<div>
  <b-card-group>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/know.svg"
    title="Know Your Tech Giants">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/media.svg"
    title="The Media Industry">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/E-commerce.svg"
    title="E-Commerce">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/socs.svg"
    title="Social Commerce">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/job.svg"
    title="Marketing Jobs of Tomorrow">
    </b-card>
  </b-card-group>
  <b-card-group>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/smart-watch.svg"
    title="Wearable Tech">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/digital.svg"
    title="Digital Disruption">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/Frame7.svg"
    title="Digital Detox">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/Frame9.svg"
    title="AI in Marketing-1">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve1/monitor.svg"
    title="Data Monitoring and Permissions">
    </b-card>
  </b-card-group>
</div>
<div class="coursebottom">
    <h4> STARTS IN </h4>
  <br>
      <b-button class="seatbutton"> DAYS: <br>01</b-button>
      <b-button class="seatbutton"> HOURS: <br>02</b-button>
      <b-button class="seatbutton"> MINS: <br>03</b-button>
      <br>
      <br>
      <h2 class="navic-color">₹14990</h2>
      <br>
      <b-button class="btn-black"> ENROLL NOW </b-button>
</div>
<h2 class="center py-6"> Who is EVOLVE-I made for? </h2>
<div class="for center py-4">
  <b-img src="~/assets/pro.svg"></b-img>
  <b-img src="~/assets/stu.svg"></b-img>
  <b-img src="~/assets/buis.svg"></b-img>
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
</style>
