<template>
    <b-container fluid class="level1 bg">
    <h1 class="section-header white py-4" > EVOLVE Level-III </h1>
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
    <p>Dominate<br>
Expand your horizons and become the leader in your peer group with level 3. With a curated selection of 10 pro subjects, this course allows you to perfect your role and career specialization. Own it.<br>
EVOLVE-III is created for marketers by marketers. In a rapidly changing communications industry, EVOLVE aims to work with limited batches and grow your understanding about the future of marketing. Whether you come from Advertising, Digital Marketing, Public Relations or social media marketing, EVOLVE will add value to your personal marketing journey.
*Recommended to take the courses in sequence. </p>
<p>*Recommended to take the courses in sequence.
<br>Next Batch: <b-icon icon="calendar3" variant="info"></b-icon>  Starting 1st August 2020 <b-icon icon="clock-history" variant="info"></b-icon>  6:30 to 7:30 PM, IST. </p>
  </b-row>
</b-col>
<b-col cols="4" class="coursebar">
  <div class="seatsleft">
    <h2 class="navic-color"> 09/10 <br> SEATS LEFT</h2>
    <b-progress height="2rem" width="2rem" :value="10" variant="info" striped :animated="animate" class="mt-2"></b-progress>
    <br>
    <br>
    <h4> STARTS IN </h4>
      <b-button class="seatbutton"> DAYS: <br>01</b-button>
      <b-button class="seatbutton"> HOUR: <br>02</b-button>
      <b-button class="seatbutton"> MINS: <br>03</b-button>
      <br>
      <br>
      <h2 class="navic-color">₹34990</h2>
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
    img-src="~/assets/evolve3/ai.svg"
    title="AI in Marketing 2">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve3/content.svg"
    title="Content Marketing">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve3/digibrand.svg"
    title="Digital Brand Design">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve3/game.svg"
    title="Growth Hacking">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve3/group.svg"
    title="Digital Communities and Groups">
    </b-card>
  </b-card-group>
  <b-card-group>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve3/growth.svg"
    title="Gamification">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve3/meme.svg"
    title="Meme Marketing">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve3/meta.svg"
    title="Metadata and keywords">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve3/regional.svg"
    title="Regional Communications">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve3/digimarket.svg"
    title="Digital Marketing - Tracking and Analysis">
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
      <h2 class="navic-color">₹34990</h2>
      <br>
      <b-button class="btn-black"> ENROLL NOW </b-button>
</div>
<h2 class="center py-6"> Who is EVOLVE-III made for? </h2>
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
</style>
