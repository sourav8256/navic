<template>
    <b-container fluid class="level1 bg">
    <h1 class="section-header white" style="padding:2rem 0 1rem" > EVOLVEPrep </h1>
<b-row class="">
<b-col lg="8" sm="12">
  <b-row>
    <b-col lg="5">
      <ul class="listleftprep">
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Batch limit -5 students </li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> 5 day program</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> 2 Live projects</li>
      </ul> </b-col>
      <b-col lg="6">
        <ul class="listleftprep">
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Live Interactive Sessions</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Segregated Q&A sessions</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Individual student feedback</li>
      </ul>
      </b-col>
  </b-row>
  <b-row class="courseboxleft">
    <h3 class="middlehead">ABOUT</h3>
    <p class=preptext>Getting ready<br>
Just graduated? Changing industries to enter marketing? This one is for you. We’ve created a 4-hour workshop for you to be ready for any and all challenges entering into the marketing eco-system. From tackling the interview and assignments to finding your passion, we help you make the decision that’s right for you.
 </p>
<p class="coursetiming">
Next Batch:  <b-icon icon="calendar3" variant="info"></b-icon>  Starting 1st August 2020 <b-icon icon="clock-history" variant="info"></b-icon>  6:30 to 7:30 PM, IST. </p>
  </b-row>
</b-col>
<b-col lg="4" class="coursebar">
  <div class="seatsleft">
    <h2 class="navic-color"> 5/10 SEATS LEFT</h2>
    <b-progress height="1.5 rem" width="2rem" :value="50" variant="info" striped :animated="animate" class="mt-2"></b-progress>
    <br>
    <br>
    <h4> STARTS IN </h4>
            <b-row>
      <b-col lg="1" class="seatbutton">01 </b-col><b-col lg="1" class="seatbutton"> 12</b-col><b-col lg="1" class="seatbutton">20</b-col>
    </b-row>
        <b-row>
      <b-col>DAYS </b-col><b-col > HOURS</b-col><b-col >MINS</b-col>
    </b-row>
    <div class="py-5">
      <h2 class="navic-color pb-4">₹4990</h2>
      <!-- <a href="/registration"><b-button class="btn-black"> ENROLL NOW </b-button></a> -->
       </div>
       <form action="/student" method="POST">
      <script
     src="https://checkout.razorpay.com/v1/checkout.js"
     data-key="rzp_test_enRiibCpGvB8WA"
      data-amount="499000"
      data-currency="INR"
     data-buttontext="Pay with Razorpay"
      data-name="Acme Corp"
      data-description="A Wild Sheep Chase is the third novel by Japanese author Haruki Murakami"
      data-prefill.name="Gaurav Kumar"
     data-prefill.email="saikat1236@gmail.com"
      data-prefill.phone="7085959167"
     data-theme.color="#F37254"
      ></script>
      <input type="hidden" custom="Hidden Element" name="hidden">
        </form>
    </div>
</b-col>
</b-row>
  <h2 class="center centerhead py-5">CURRICULUM STRUCTURE</h2>
  <b-row align-self="center">
    <b-col align-self="start"></b-col>
    <b-col lg="8" align-self="center">
      <div class="blackbar"><p class="navic-color aquatext" style="margin-bottom: 0rem !important"> DAY 1:</p>&nbsp;&nbsp; <p style="margin-bottom: 0rem !important">Introduction + The job market in India + Finding your focus</p></div>
      <div class="blackbar"><p class="navic-color aquatext" style="margin-bottom: 0rem !important"> DAY 2: </p>&nbsp;&nbsp; <p style="margin-bottom: 0rem !important">The Resume</p></div>
      <div class="blackbar"><p class="navic-color aquatext" style="margin-bottom: 0rem !important"> DAY 3: </p>&nbsp;&nbsp; <p style="margin-bottom: 0rem !important">The Interview</p></div>
      <div class="blackbar"><p class="navic-color aquatext" style="margin-bottom: 0rem !important"> DAY 4: </p> &nbsp;&nbsp;<p style="margin-bottom: 0rem !important">The Assignment</p></div>
      <div class="blackbar"><p class="navic-color aquatext" style="margin-bottom: 0rem !important"> DAY 5: </p> &nbsp;&nbsp;<p style="margin-bottom: 0rem !important">Audits, grades and Q&A</p></div>
      </b-col>
    <b-col align-self="end"></b-col>
  </b-row>
<div class="coursebottom hidemobile">
  <b-row>
    <b-col lg="4" align-self="start"></b-col>
    <b-col lg="4" align-self="center" class="px-2">
    <div class="seatsleft">
     <h2 class="navic-color"> 5/10 SEATS LEFT</h2>
      <b-progress height="1.5 rem" width="2rem" :value="50" variant="info" striped :animated="animate" class="mt-2"></b-progress>
     <br>
      <br>
     <h4> STARTS IN </h4>
            <b-row>
      <b-col lg="1" class="seatbutton">01 </b-col><b-col lg="1" class="seatbutton"> 12</b-col><b-col lg="1" class="seatbutton">20</b-col>
     </b-row>
        <b-row>
      <b-col>DAYS </b-col><b-col > HOURS</b-col><b-col >MINS</b-col>
     </b-row>
     <div class="py-5">
      <h2 class="navic-color pb-4">₹4990</h2>
          <!-- <a href="/registration"><b-button class="btn-black"> ENROLL NOW </b-button></a> -->
     </div>

    </div>
    </b-col>
    <b-col align-self="end"></b-col>
  </b-row>
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
.seatsleft{
  font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 14.4762px;
line-height: 14px;
text-align: center;
}
.level1{
  display: flexbox;
  color:white;
  padding:0px 100px;
}
.ul {
  list-style-type: none;
}
.listleftprep{
padding-inline-start: 0px !important;
font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 55px;
align-items: center;

}
.preptext{
  font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* or 162% */
text-align: justify;
letter-spacing: 0.0161em;

}
.middlehead{
  font-family: Brandon Grotesque;
font-style: normal;
font-weight: 420;
font-size: 24px;
line-height: 55px;
/* or 231% */
text-transform: uppercase;
color: #FFFFFF;
}
.coursebar{
  text-align: center;
}
.progress{
  border-radius: 20px;
}
.coursetiming{
  font-family: Now;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
}
.courseboxleft{
  text-align: left;
  padding: 10px 53px;
}
.coursebottom{
  text-align: center;
  padding: 20px;
}
.seatbutton{
background: #242728;
box-shadow: inset -4.8254px -4.8254px 4.8254px rgba(68, 68, 68, 0.25), inset 4.8254px 4.8254px 4.8254px rgba(2, 2, 2, 0.15);
border-radius: 48.254px;
margin: 22px 45px;
padding: 11px 26px 11px 13px;
display: inline-flex;
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
display: flex;
text-align: center;
    padding:10px;
    margin: 15px;
}
.aquatext{
font-family: Now;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 26px;
}
.centrehead{
font-family: Brandon Grotesque;
font-style: normal;
font-weight: 900;
font-size: 24px;
line-height: 55px;
text-align: center;
}
</style>
