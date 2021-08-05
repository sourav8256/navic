<template>
    <b-container fluid class="level1 bg">
    <h1 class="section-header white py-4" > EVOLVE PRO </h1>
<b-row class="">
<b-col cols="8">
  <b-row>
    <b-col>
      <ul>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Customized Course </li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> 5 sessions or more</li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Live Projects</li>
      </ul> </b-col>
      <b-col><ul>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Live Interactive Sessions</li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Segregated Q&A sessions</li>
      <li> <b-icon icon="check-circle" variant="info"></b-icon> Individual employee feedback</li>
      </ul>
      </b-col>
  </b-row>
  <b-row class="courseboxleft">
    <h3>ABOUT</h3>
    <p>This one is for the Pros<br>
We understand the value knowledge and market intelligence brings to employees across PR, Digital Marketing, Brand consulting and Advertising functions. At NAVICLearn, we create custom programs within and beyond the EVOLVE eco-system for professionals.
 </p>
 <b-button class="btn-black">CUSTOMIZE NOW</b-button>
  </b-row>
</b-col>
<b-col cols="4" class="coursebar">
<div class="formbody">
 <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
           <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Name:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.message"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Enquiry" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.message"
          placeholder="Enter Message"
          required
        ></b-form-input>
      </b-form-group>
<!----
      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
--->
      <b-button type="submit" class="btn-black">SEND</b-button>
     <!--  <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
      </div>
</b-col>
</b-row>
  <h2 class="center">MODULES</h2>
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
  <b-card-group>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/affliate.svg"
    title="Money and Marketing">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/bot.svg"
    title="Chatbots">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/digital.svg"
    title="Sci-Fi realties">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/government.svg"
    title="Social Media and Government">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/headset.svg"
    title="Virtual Assistants">
    </b-card>
  </b-card-group>
  <b-card-group>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/immersive.svg"
    title="VR and AR">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/money.svg"
    title="Affiliate and Influencer Marketing">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/open.svg"
    title="The World of OpenSource">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/secure-data.svg"
    title="Digital Safety Net">
    </b-card>
    <b-card
    class="coursecard"
    bg-variant="dark"
    text-variant="white"
    img-src="~/assets/evolve2/troll.svg"
    title="Trolls and Bots">
    </b-card>
  </b-card-group>
</div>
<div class="coursebottom">

      <b-button class="btn-black"> CUSTOMIZE NOW </b-button>
</div>
<h2 class="center py-6"> Who is EVOLVE PRO made for? </h2>
<div class="for center py-4">
  <b-img src="~/assets/pro.svg"></b-img>
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
