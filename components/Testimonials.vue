<template>
<section class="testimonials justify-content-center py-5">
        <h1 class="section-head"> Meet our Students</h1>
        <div class="mt-5 px-5">
        <b-row>
            <b-col lg="3" align-self="center">
                            <div class="maincard ">
                <div class="thecard">
                    <div class="thefront text-center py-4"> <img src="~/assets/testimonials1.jpg" class="rounded-circle " width="220">
                        <h3 class="mt-2 mb-0 stuname">Sanika Newaskar</h3>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4 style="text-align:center;"><b-icon icon="chat-left-quote" scale="10" variant="info"></b-icon></h4>
                            <p class="quote p-2">" IT'S ONE OF THE MOST ENGAGING
COURSES I HAVE TAKEN. THE NEWS
SESSION ESPECIALLY WAS REALLY
INTRIGUING. I GOT TO LEARN MANY THINGS
WHICH I NEVER WONDERED ABOUT
BEFORE. THE SHOW RECOMMENDATIONS
WERE EXCITING AS WELL!
"</p>
                        </div>
                    </div>
                </div>
            </div>
            </b-col>
             <b-col lg="3" >
                            <div class="maincard ">
                <div class="thecard">
                    <div class="thefront text-center py-4"> <img src="~/assets/testimonials7.jpg" class="rounded-circle " width="220">
                        <h3 class="mt-2 mb-0 stuname">Vani Krishna</h3>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4 style="text-align:center;"><b-icon icon="chat-left-quote" scale="10" variant="info"></b-icon></h4>
                            <p class="quote p-2">" THE SESSIONS WERE SO ENRICHING AND
INFORMATIVE. WHAT I LIKE THE MOST ABOUT THIS
SESSION IS THAT THE ELEGANT AND SIMPLE
PRESENTATION OF EACH MODULE. NEWS INTRO AT
THE BEGINNING OF EACH SESSION IS ALSO A NEW
APPROACH WHICH MAKES THE COURSE MORE
ATTRACTIVE. "</p>
                        </div>
                    </div>
                </div>
            </div>
            </b-col>
            <b-col lg="3">
                            <div class="maincard ">
                <div class="thecard">
                    <div class="thefront text-center py-4"> <img src="~/assets/testimonials2.jpg" class="rounded-circle " width="220">
                        <h3 class="mt-2 mb-0 stuname">Sourav Kanungo</h3>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4 style="text-align:center;"><b-icon icon="chat-left-quote" scale="10" variant="info"></b-icon></h4>
                            <p class="quote p-2">" INSIGHTFUL AND MADE FOR GEN Z
PROFESSIONALS LIKE US. THE
REGULAR NEWS UPDATES SHARED
IN THE BEGINNING OF EVERY
SESSION IS REALLY INTERESTING.
LOVE THE SELECTION OF TOPICS
TOO! "</p>
                        </div>
                    </div>
                </div>
            </div>
            </b-col>
            <b-col lg="3">
                            <div class="maincard ">
                <div class="thecard">
                    <div class="thefront text-center py-4"> <img src="~/assets/testimonials10.jpg" class="rounded-circle " width="220">
                        <h3 class="mt-2 mb-0 stuname">Khushi Rawat</h3>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4 style="text-align:center;"><b-icon icon="chat-left-quote" scale="10" variant="info"></b-icon></h4>
                            <p class="quote p-2">" THE COURSE GIVES YOU AN
INSIGHT INTO WHERE THE
WORLD IS HEADED,
DEFINITELY BROADENS
YOUR HORIZON. "</p>
                        </div>
                    </div>
                </div>
            </div>
            </b-col>
        </b-row>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.testimonials{
  height: 100%;
  display:block;
  background: white;
}
.maincard {
    position: relative;
    width: 300px;
    height: 300px
}

.thecard {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transition: all 0.8s ease;
    -webkit-transition: all 0.8s ease;
}

.thecard:hover {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
}

.thefront {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: hidden;
    background: #242728;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #eee;
    box-shadow: -7.55474px -7.55474px 10px rgba(56, 56, 56, 0.3), 7.55474px 7.55474px 10px rgba(2, 2, 2, 0.2);
    padding: 10px
}

.theback {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: hidden;
    background: gray;
    color: #fff;
    border-radius: 10px;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    border: 1px solid #eee;
    box-shadow: -7.55474px -7.55474px 10px rgba(56, 56, 56, 0.3), 7.55474px 7.55474px 10px rgba(2, 2, 2, 0.2);
    padding: 10px
}
.stuname{
    font-family: Now;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: center;

}
.quote {
    font-family: NowThin;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 18px;
letter-spacing: 0em;
text-align:center;
}
</style>
