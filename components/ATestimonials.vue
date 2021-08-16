<template>
<section class="testimonials">
    <b-container fluid>
        <h1 class="section-head"> Meet our Students</h1>
        <b-card-group deck>
        <b-card
        overlay
        border-variant="light"
        align="center"
        img-src="~/assets/testimonials1.jpg"
        img-alt="Image"
        title="Anupama Basi"
        text-variant="dark"
        class= "flip-card-inner"
        >
        <div class="hide">I am shown when someone hovers over the div above.</div></b-card>
        <div class="flip-card">
        <b-card
        overlay
        border-variant="light"
        align="center"
        img-src="~/assets/testimonials2.jpg"
        img-alt="Image"
        title="Rohan Ghosh"
        text-variant="light"
        class= "flip-card-inner"
        ></b-card> </div>
        <div class="flip-card">
        <b-card
        overlay
        border-variant="light"
        align="center"
        img-src="~/assets/testimonials7.jpg"
        img-alt="Image"
        title="Ritika Amesh"
        text-variant="dark"
        class= "flip-card-inner"
        ></b-card>
        </div>
      </b-card-group>
       <b-button v-b-toggle.collapse-a class="btn-testimonials">KNOW MORE</b-button>
        <b-collapse id="collapse-a" class="mt-2">
         <b-card-group deck>
        <div class="flip-card">
        <b-card
        overlay
        border-variant="light"
        align="center"
        img-src="~/assets/testimonials3.jpg"
        img-alt="Image"
        title="Ambuja Pathak"
        text-variant="dark"
        class= "flip-card-inner"
        ></b-card>
        </div>
        <div class="flip-card">
        <b-card
        overlay
        border-variant="light"
        align="center"
        img-src="~/assets/testimonials4.jpg"
        img-alt="Image"
        title="Rakesh Sethi"
        text-variant="dark"
        class= "flip-card-inner"
        ></b-card> </div>
        <div class="flip-card">
        <b-card
        overlay
        border-variant="light"
        align="center"
        img-src="~/assets/testimonials5.jpg"
        img-alt="Image"
        title="Vaishnavi Karnik"
        text-variant="dark"
        class= "flip-card-inner"
        ></b-card>
        </div>
      </b-card-group>
      </b-collapse>
    </b-container>
    </section>
</template>
<style>
.testimonials{
  height: 100%;
  display: flex;
  background: white;
}
.b-card{
  height:300px;
  width:300px;
}
.btn-testimonials{
text-align: center;
display: flex;
margin:auto;
margin-top:80px;
}
.card-deck{
    margin:20px;
    padding:0px 120px;
}
.hide{
  display: none;
}
.b-card :hover + .hide {
    color: tomato;
    display: block;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  padding: 0px 50px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
.collapse-a{
display: flex;
}
</style>
