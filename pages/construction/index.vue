<template>
  <div class="main">
    <div class="navbar-construction">
      <b-navbar class="justify-content-center">
        <img class="logoconstruction" src="~assets/whitelogo.svg">
      </b-navbar>
    </div>
    <div container class="construction-body flex">
      <transition
      enter-active-class="animate__fadeOutRightBig">
      <h1 class="text-head align-bottom ">
        EVOLVE
      </h1> </transition>
      <div class="loading-symbol inline-block">
        <span class="polygon-construction" v-bind:style="{ display: computedDisplay}"> <img v-bind:src="require('~/assets/' + img)"> </span>
        <span class="ellipse-construction"> <img src="~/assets/ellipse.svg" alt=""> </span>
        <span class="rectangle-construction"> <img src="~/assets/rectangle.svg" alt=""> </span>
      </div>
      <h4 class="text-bottom align-bottom">
        COMING SOON...
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    img: 'polygon3.svg',
    computedDisplay: 'inline'
  })
}
</script>

<style>
.main{
    background-color:#0F0F0F;
    height:100vh;
    width:100%;
}
.text-head{
    font-family: lovelo;
    padding-top:20px;
    font-size: 120px;
    color: ivory;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.text-bottom{
    font-family: lovelo;
    font-size: 30px;
    color: ivory;
box-sizing: border-box;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
padding-top: 70px;
}
.logoconstruction{
    align-content: center;
    text-align: center;
    width: auto;
    height:100px;
}
.navbar-construction{
    background-color:#c43434;
}
.construction-body{
    padding-top: 150px;
    text-align: center;
    position : relative;
    bottom: 0;
}
.loading-symbol{
text-align: center;
padding: 0px;
padding-bottom: 50px;
}
.polygon-construction{
padding: 5px;
}
.rectangle-construction{
padding: 5px;
animation-name:vanish;
animation-duration: 5s;
display: initial;
}
.ellipse-construction{
padding: 5px;
}
@keyframes vanish{
    from {display: initial;}
    to {display: none;}
}
</style>
