<template>
<section class="course-body">
<h1 class="section-head white">Courses</h1>
<b-row>
        <b-col class="sectionrow-box">
            <b-row>
            <p class="course-title"> EVOLVEGo </p>
            </b-row>
            <b-row>
            <p class="price navic-color" >from ₹990</p>
            <img src="~/assets/courseline.svg">
             </b-row>
                <ul >
                    <li>2 Hours Workshop</li>
                    <li>Segregated QA sessions</li>
                    <li>Live Interactive Session</li>
                </ul>
            <b-row><b-button class="btn-black">KNOW MORE</b-button></b-row>
        </b-col>
                <b-col class="sectionrow-box">
            <b-row>
            <p class="course-title"> EVOLVE I, II & III </p>
            </b-row>
            <b-row>
            <p class="price navic-color" >From ₹14990 </p>
            <img src="~/assets/courseline.svg">
             </b-row>
                <ul >
                    <li>10 Week Courses</li>
                    <li>10 Subjects</li>
                    <li>Segregated Q&A sessions</li>
                    <li>Live Interactive Sessions</li>
                    <li>10 Assignments & 3 Projects </li>
                    <li>Individual feedback</li>
                </ul>
            <b-row><b-button class="btn-black">KNOW MORE</b-button></b-row>
        </b-col>

        <b-col class="sectionrow-box">
            <b-row>
            <p class="course-title"> EVOLVEPrep </p>
            </b-row>
            <b-row>
            <p class="price navic-color" >from ₹4990</p>
            <img src="~/assets/courseline.svg">
             </b-row>
                <ul >
                    <li>5 day career prep curriculum</li>
                    <li>Segregated QA sessions</li>
                    <li>Live Interactive Session</li>
                    <li>2 Live projects</li>
                    <li>Individual student feedback</li>
                </ul>
            <b-row><b-button class="btn-black">KNOW MORE</b-button></b-row>
        </b-col>

        <b-col class="sectionrow-box">
            <b-row>
            <p class="course-title"> EVOLVEPro </p>
            </b-row>
            <b-row>
            <p class="price navic-color" >Price On Request</p>
            <img src="~/assets/courseline.svg">
             </b-row>
                <ul >
                    <li>Customized Course</li>
                    <li>5 or more subjects </li>
                    <li>Live Interactive Session</li>
                    <li>Segregated Q&A sessions</li>
                    <li>Live Projects</li>
                    <li>Individual employee feedback</li>
                </ul>
            <b-row><b-button class="btn-black">CUSTOMIZE NOW</b-button></b-row>
        </b-col>
</b-row>
</section>
</template>

<style scoped>
.course-body{
    height: 130vh;
    width: 100%;
    background: #242728;
    padding:50px;
}
.sub-col{
    font-family: Now;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 55px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    text-align: left;
    margin:10px;
    padding-top:30px;}
.sub-text{
    padding: 10px;
}
.text-column{
    font-size: 14px;
    text-align: justify;
}
.sectionrow-box{
    background-image: url(.\assets\coursebg.svg) ;
    background-size: contain;
    background-repeat: no-repeat;
    font-family: Now;
    color:white;
    align-content:center;
    height: 552px;
    width: 276px;
    text-align: center;
    margin:10px;

}
.course-btn{
  width:150px;
  box-shadow: 7.554744243621826px 7.554744243621826px 10px 0px rgba(2, 2, 2, 0.5);
  box-shadow: -7.554744243621826px -7.554744243621826px 10px 0px rgba(56, 56, 56, 0.15);
  background: rgba(15, 15, 15, 1);
  background: #0F0F0F;
  box-shadow: -7.55474px -7.55474px 10px rgba(56, 56, 56, 0.15), 7.55474px 7.55474px 10px rgba(2, 2, 2, 0.5);
  border-radius: 25.1825px;
  font-family: Now;
  font-weight: 500;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  border-color: rgba(0, 0, 0, 0);
  margin:20px;
}
.course-title{
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 55px;
letter-spacing: 0em;
text-align: center;

}
.course-list{
    align-content: center;
    text-align: left;
    padding-top: 70px;
}
.course-item {
    padding: 10px;
    text-transform: uppercase;
}
.text-color{
    background-color: linear-gradient(180deg, #00C2FF 0%, #3DFFA2 100%);
    font-family: Now;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 26px;
text-align: center;
text-transform: uppercase;
color:#3DFFA2;
}
.seats-time{
    display: inline-flex;
    margin:1px;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    }
.seats-timetext{
    text-align: center;
    padding: 10px;
    }
.seats-circle{
    display: block;
    padding-block: 70px;
    height: 200px;
    width: 200px;
    border-radius: 100%;
    opacity: 0.5;
    border: 21.875px solid #0F0F0F;
    filter: blur(0px);
    border: 2.19px solid;
    border-image-source: linear-gradient(180deg, #00C2FF 0%, #3DFFA2 100%);
    box-shadow: inset -4px -4px 7.29167px rgba(65, 65, 65, 0.25), inset 4px 4px 7.29167px rgba(0, 0, 0, 0.25);
    }
    .circle-border{
    background: #0F0F0F;
    box-shadow: inset -4px -4px 4px rgba(40, 40, 40, 0.25), inset 4px 4px 4px rgba(2, 2, 2, 0.25);
    border-radius:100%;
    display:inline-flex;
    padding: 20px;
    height:60px;
    width:60px;
    text-align: center;
    }
    .circle-group{
    display: inline-flexbox;
    text-align:center;
    }
    .textbox-left{
        margin-left: 0px;
    }
</style>
