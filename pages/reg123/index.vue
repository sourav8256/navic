<template>
<b-container fluid class="py-5">
    <h1 class="section-header white">SIGN UP</h1>
    <div class="login">
     <b-col></b-col><b-col cols=12>
        <div class="subtitle white">Already Part of NAVIC?&nbsp;</div>
      <div class="subtitle navic-color text-center"> <a href="/login123"> LOGIN </a></div>
      </b-col><b-col></b-col>
    </div>
      <signup-123 />
</b-container>
</template>

<style  scoped>
.login {
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.subtitle{
font-family: Now;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
color:white;
}
div {
  color: inherit;
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
font-weight: 600;
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
