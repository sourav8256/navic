<template>
  <section class="main">
    <b-container fluid>
      <h1 class="text-head align-bottom">
        EVOLVE
      </h1>
      <div class="loading-symbol inline-block">
        <span class="polygon-construction" v-bind:style="{ display: computedDisplay}"> <img v-bind:src="require('~/assets/' + img)"> </span>
        <span class="ellipse-construction"> <img src="~/assets/ellipse.svg" alt=""> </span>
        <span class="rectangle-construction"> <img src="~/assets/rectangle.svg" alt=""> </span>
      </div>
      <h4 class="text-bottom align-bottom animate__bounce">
       THE FUTURE OF MARKETING
      </h4>
      <a href="/evolve/evolvei"><b-button class="bottom-btn">KNOW MORE</b-button></a>
      </b-container>
  </section>
</template>
<script>
export default {
  layout: 'homepage',
  data: () => ({
    img: 'polygon3.svg',
    computedDisplay: 'inline'
  })
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
.main{
    background: #242728;
    height:100%;
    width:100%;
    text-align: center;
    position : relative;
    padding-top: 3rem;
}
.text-head{
    font-family: Brandon Grotesque;
    padding-top:2rem;
font-weight: 900;
font-size: 90px;
    color: ivory;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
letter-spacing: 0.15em;
}
.text-bottom{
 font-family: Now;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 55px;
letter-spacing: 0.15em;
text-align: center;
color: ivory;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
padding-bottom: 55px;
padding-top: 0.5rem;
}
.logoconstruction{
    align-content: center;
    text-align: center;
    width: auto;
}
.navbar-construction{
    background-color:#0F0F0F;
}
.construction-body{
    padding-top: 150px;
    text-align: center;
    position : relative;
    bottom: 0;
}
.loading-symbol{
text-align: center;
padding: 0.5em 0em 1em ;
}
.polygon-construction{
padding: 5px;
margin:4rem;
}
.rectangle-construction{
padding: 5px;
animation-name:vanish;
animation-duration: 5s;
display: initial;
margin:5rem;
}
.ellipse-construction{
padding: 5px;
height:20px;

}
@keyframes vanish{
    from {display: initial;}
    to {display: none;}
}
.bottom-btn{
  width:200px;
 background: #242728;
box-shadow: -7.55474px -7.55474px 10px rgba(56, 56, 56, 0.3), 7.55474px 7.55474px 10px rgba(2, 2, 2, 0.2);
border-radius: 25px;
  font-family: Now;
  font-weight: 500;
  font-size: 15.6719px;
  line-height: 63px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  border-color: rgba(0, 0, 0, 0);
  margin-bottom: 80px;
}
@media only screen and (min-width: 1440px)
{
  .main{
    height: 100vh !important;
  }
.text-head{
  padding-top:7rem !important;
}
}
</style>
