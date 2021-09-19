<template>
    <b-container fluid class="level1 bg">
    <h1 class="section-header white" style="padding:2rem 0 1rem" >  EVOLVEPro</h1>
<b-row class="">
<b-col lg="8">
  <b-row>
    <b-col lg="5">
      <ul class="listleftprep">
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Customized Course</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> 5 sessions or more</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Live Projects</li>
      </ul> </b-col>
      <b-col lg="6">
        <ul class="listleftprep">
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Live Interactive Sessions</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Segregated Q&A sessions</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Individual employee feedback</li>
      </ul>
      </b-col>
  </b-row>
  <b-row class="courseboxleft">
    <h3 class="middlehead">ABOUT</h3>
    <p class=preptext pb-4>This one is for the Pros<br>
 We understand the value knowledge and market intelligence brings to employees across PR, Digital Marketing, Brand consulting and Advertising functions. At NAVICLearn, we create custom programs within and beyond the EVOLVE eco-system for professionals.
 </p>
<a href="\evolvePro\customize"><b-button class="btn-black center"> Customize NOW </b-button></a>
  </b-row>
</b-col>
<b-col lg="4" class="formpro">
    <FormPro />
</b-col>
</b-row>
  <h2 class="center centerhead py-5">Modules in This Course</h2>
  <b-row align-self="center">
    <b-col lg="4" class="p-0">
  <div class="accordion accordian-body" role="tablist">
  <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/affliate.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-1 variant="dark">Affiliate and Influencer Marketing</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is an affiliate?<br>
&#9679;&nbsp;Importance of
affiliates<br>
&#9679;&nbsp;The Influencer
affiliate<br>
&#9679;&nbsp;The Sales affiliate<br>
&#9679;&nbsp;Metrics to know<br>
&#9679;&nbsp;Fundamentals of
affiliates</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/bot.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-2 variant="dark">Chatbots</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What are chatbots?<br>
&#9679;&nbsp;How do chatbots
work?<br>
&#9679;&nbsp;Types of chatbots<br>
&#9679;&nbsp;Why are they
important?<br>
&#9679;&nbsp;Best chatbots in the
world<br>
&#9679;&nbsp;Chatbots @ work<br>
&#9679;&nbsp;Future</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/digital.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">Sci-Fi realties</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is Sci-Fi?<br>
&#9679;&nbsp;What does it
represent?<br>
&#9679;&nbsp;Sci-Fi in practice<br>
&#9679;&nbsp;Expectations<br>
&#9679;&nbsp;Realism in Sci-Fi<br>
&#9679;&nbsp;What do we expect?<br>
&#9679;&nbsp;Case Study 1<br>
&#9679;&nbsp;Case Study 2<br>
&#9679;&nbsp;Case Study 3</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/government.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-4 variant="dark">Social Media and Government</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;The state of social
media in 2020<br>
&#9679;&nbsp;How governments
use social media
and tech<br>
&#9679;&nbsp;Case 1<br>
&#9679;&nbsp;Case 2<br>
&#9679;&nbsp;Case 3<br>
&#9679;&nbsp;Right to speech<br>
&#9679;&nbsp;India perspective<br>
&#9679;&nbsp;Global perspective</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/headset.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-5 variant="dark">Virtual Assistants</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is a VA<br>
&#9679;&nbsp;How do they work?<br>
&#9679;&nbsp;Types of VA<br>
&#9679;&nbsp;How are they
different from
chatbots?<br>
&#9679;&nbsp;Timeline of VA<br>
&#9679;&nbsp;The weird side of VA<br>
&#9679;&nbsp;Use-case of VA<br>
&#9679;&nbsp;Assignment</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/immersive.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-6 variant="dark">VR & AR</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is AR?<br>
&#9679;&nbsp;What is VR?<br>
&#9679;&nbsp;What is the
difference in
practice?<br>
&#9679;&nbsp;Use-case
Experiment<br>
&#9679;&nbsp;Alternate uses of AR
and VR<br>
&#9679;&nbsp;How to get started?</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/money.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-7 variant="dark">Money and Marketing</b-button>
      </b-card-header>
      <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is money?<br>
&#9679;&nbsp;Money today<br>
&#9679;&nbsp;How has money
changed?<br>
&#9679;&nbsp;How has spending
changed?<br>
&#9679;&nbsp;Digital currency<br>
&#9679;&nbsp;Cryptocurrency<br>
&#9679;&nbsp;Legally speaking<br>
&#9679;&nbsp;Future of money</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/open.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-8 variant="dark">The World of OpenSource</b-button>
      </b-card-header>
      <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What and where do
we see Open
source?<br>
&#9679;&nbsp;Why is it free?<br>
&#9679;&nbsp;The community
factor<br>
&#9679;&nbsp;Should we trust
open source
material?<br>
&#9679;&nbsp;Hackers and open-source.</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/secure-data.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-9 variant="dark">Digital Safety Net</b-button>
      </b-card-header>
      <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is a DSN?<br>
&#9679;&nbsp;Types of DSN<br>
&#9679;&nbsp;Business case of AI<br>
&#9679;&nbsp;How does a DSN
protect a brand?<br>
&#9679;&nbsp;DSN for B2B<br>
&#9679;&nbsp;DSN for B2C<br>
&#9679;&nbsp;DSN in action</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve2/troll.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-10 variant="dark">Trolls and Bots</b-button>
      </b-card-header>
      <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What are trolls?<br>
&#9679;&nbsp;Why do trolls exist?<br>
&#9679;&nbsp;How and why are
they used?<br>
&#9679;&nbsp;Can they be used for
good?<br>
&#9679;&nbsp;What are bots?<br>
&#9679;&nbsp;Different functions
of bots<br>
&#9679;&nbsp;Where are they?<br>
&#9679;&nbsp;How to know a bot?</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>

  </div>
    </b-col>
    <b-col lg="4" align-self="center" class="p-0">
  <div class="accordion accordian-body" role="tablist">
  <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/know.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-1 variant="dark">Know Your Tech Giants </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">
            &#9679;&nbsp;The evolution of Data<br>
&#9679;&nbsp;Silicon Valley<br>
&#9679;&nbsp;How did doing business change?<br>
&#9679;&nbsp;Who are they?<br>
&#9679;&nbsp;What do they know about you?<br>
&#9679;&nbsp;Role of India in Tech <br>
&#9679;&nbsp;What can we learn?</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/digital.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-2 variant="dark">Digital Disruption </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is disruption?<br>
&#9679;&nbsp;How does an
industry get
disrupted?<br>
&#9679;&nbsp;Pros and cons of
disruption<br>
&#9679;&nbsp;Case 1<br>
&#9679;&nbsp;Case 2<br>
&#9679;&nbsp;Case 3<br>
&#9679;&nbsp;How can you
disrupt?</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/E-commerce.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">E-commerce</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;History of e-commerce<br>
&#9679;&nbsp;e-commerce today<br>
&#9679;&nbsp;Industry scope<br>
&#9679;&nbsp;Milestones<br>
&#9679;&nbsp;e-commerce in
2020<br>
&#9679;&nbsp;How can you use e-commerce for you<br>
&#9679;&nbsp;Future of e-commerce</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/Frame7.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-4 variant="dark">Digital Detox</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;Since this subject
concerns a detox of all
digital activities, all
components of this
session will be non-digital in nature.</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/Frame9.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-5 variant="dark">AI in Marketing </b-button>
      </b-card-header>
      <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is AI<br>
&#9679;&nbsp;What is ML<br>
&#9679;&nbsp;What can AI do?<br>
&#9679;&nbsp;Types of AI<br>
&#9679;&nbsp;Who uses AI?<br>
&#9679;&nbsp;Most used AI<br>
&#9679;&nbsp;AI in comms</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/job.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-6 variant="dark">Marketing Jobs of Tomorrow</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is work?<br>
&#9679;&nbsp;How have jobs
changed?<br>
&#9679;&nbsp;The gig economy<br>
&#9679;&nbsp;Value creation<br>
&#9679;&nbsp;What is today what
wasn't yesterday?<br>
&#9679;&nbsp;Dependance on
automation over
people</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/media.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-7 variant="dark">The Media Industry </b-button>
      </b-card-header>
      <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is Media?<br>
&#9679;&nbsp;What encapsulates
the media industry?<br>
&#9679;&nbsp;How did the
internet change
media?<br>
&#9679;&nbsp;Who are the biggest
media corporations?<br>
&#9679;&nbsp;How has media
evolved?
</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/monitor.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-8 variant="dark">Data Monitoring and Permissions</b-button>
      </b-card-header>
      <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;Data monitoring
today<br>
&#9679;&nbsp;Role of corporations<br>
&#9679;&nbsp;Role of governments<br>
&#9679;&nbsp;What do you 'Agree'
to?<br>
&#9679;&nbsp;What do you own?<br>
&#9679;&nbsp;How much are you
worth?</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/smart-watch.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-9 variant="dark">Wearable Tech </b-button>
      </b-card-header>
      <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What are wearables?<br>
&#9679;&nbsp;Use-case of
wearables<br>
&#9679;&nbsp;Journey of
wearables<br>
&#9679;&nbsp;Pros and cons of
wearables<br>
&#9679;&nbsp;Data analysis<br>
&#9679;&nbsp;Importance of social
currency<br>
&#9679;&nbsp;Future of wearables</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/socs.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-10 variant="dark">Social Commerce</b-button>
      </b-card-header>
      <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">Marketing & communications students from the age of 8 to 80. We highly recommend this course to 3 kinds of students:<br>
              1. Students in graduation fields of Digital marketing, BMS/BMS, Management, Arts, Commerce, Communications, Advertising and Media<br>
              2. MBAs and Post graduates in Marketing streams<br>
              3. Professionals in Digital marketing, PR, Advertising, Media Planning & buying and Journalists
              <br> If you do well in EVOLVE, you’ll have more practical knowledge than half your peers and seniors in your current or future organisation.</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>

  </div>
    </b-col>
<b-col lg="4" class="p-0">
  <div class="accordion accordian-body" role="tablist">
  <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/ai.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-1 variant="dark">Ai In Marketing 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;The AI revolution<br>
&#9679;&nbsp;The Turing Test<br>
&#9679;&nbsp;How AI
communicates<br>
&#9679;&nbsp;How communicators
use AI<br>
&#9679;&nbsp;Case 1<br>
&#9679;&nbsp;Case 2<br>
&#9679;&nbsp;How can you use AI?<br>
&#9679;&nbsp;Future of AI
</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/content.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-2 variant="dark">Content Marketing</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is content
marketing?<br>
&#9679;&nbsp;How has it changed?
Storytelling
Automation in
Content<br>
&#9679;&nbsp;Change in content
formats
Old vs new<br>
&#9679;&nbsp;Use case 1<br>
&#9679;&nbsp;Use case 2</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/digibrand.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">Digital Brand Design</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;Basics of brand
design<br>
&#9679;&nbsp;What is a digital
brand design?<br>
&#9679;&nbsp;Fundamentals of
digital brand design<br>
&#9679;&nbsp;Digital consumer
journey<br>
&#9679;&nbsp;Digital experience<br>
&#9679;&nbsp;Use-case of digital
brand design
</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/digimarket.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-4 variant="dark">Digital Marketing - Tracking and Analysis</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is tracking and
analysis?<br>
&#9679;&nbsp;Fundamentals of
success<br>
&#9679;&nbsp;Expectation setting<br>
&#9679;&nbsp;Types of metrics<br>
&#9679;&nbsp;Tools to track
marketing success<br>
&#9679;&nbsp;Use-case 1<br>
&#9679;&nbsp;Use-case 2
</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/game.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-5 variant="dark">Gamification</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is a game?<br>
&#9679;&nbsp;Gamification -
Basics<br>
&#9679;&nbsp;The fundamental
design of
gamification<br>
&#9679;&nbsp;Gamification &
Communications<br>
&#9679;&nbsp;Case 1<br>
&#9679;&nbsp;Case 2<br>
&#9679;&nbsp;Incentives</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/group.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-6 variant="dark">Digital Communities and Groups</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;Who are the digital
communities and
groups?<br>
&#9679;&nbsp;What is their role in
social media
communication?<br>
&#9679;&nbsp;Types of groups and
communities<br>
&#9679;&nbsp;Paid/Unpaid
partnerships<br>
&#9679;&nbsp;Use-cases
</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/growth.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-7 variant="dark">Growth Hacking</b-button>
      </b-card-header>
      <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is Growth
Hacking?<br>
&#9679;&nbsp;What is growth
hacking on
social/digital?<br>
&#9679;&nbsp;Basic techniques of
growth hacking<br>
&#9679;&nbsp;The role of JUGAAD<br>
&#9679;&nbsp;Use-case of growthhacking
</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/meme.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-8 variant="dark">Meme Marketing</b-button>
      </b-card-header>
      <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">What is a meme?<br>
&#9679;&nbsp;History of memes<br>
&#9679;&nbsp;Types of memes<br>
&#9679;&nbsp;Use-cases of memes<br>
&#9679;&nbsp;Memes in India<br>
&#9679;&nbsp;How to create
memes<br>
&#9679;&nbsp;Fundamentals of
meme marketing
</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/meta.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-9 variant="dark">Metadata and keywords</b-button>
      </b-card-header>
      <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is metadata?<br>
&#9679;&nbsp;How does it work?<br>
&#9679;&nbsp;Use case of
Metadata<br>
&#9679;&nbsp;What are keywords?<br>
&#9679;&nbsp;How do they work?<br>
&#9679;&nbsp;Use-case of
keywords<br>
&#9679;&nbsp;Synergy</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve3/regional.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-10 variant="dark">Regional Communications</b-button>
      </b-card-header>
      <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What are regional
communications?<br>
&#9679;&nbsp;What is the role of
regional content in
India?<br>
&#9679;&nbsp;The role of social
platforms in pushing
regional content<br>
&#9679;&nbsp;The situation today<br>
&#9679;&nbsp;Usecase 1<br>
&#9679;&nbsp;Usecase 2</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>

  </div>
    </b-col>
  </b-row>
<div class="coursebottom">
  <b-row>
    <b-col lg="4" align-self="start"></b-col>
    <b-col lg="4" align-self="center" class="px-2 pb-4">
      <a href="\evolvePro\customize"><b-button class="btn-black"> Customize NOW </b-button></a>
    </b-col>
    <b-col align-self="end"></b-col>
  </b-row>
</div>
<h2 class="center py-6"> Who is EVOLVE &nbsp;Pro made for? </h2>
<div class="for center py-4">
  <b-img src="~/assets/buis.svg"></b-img>
  <b-img src="~/assets/pro.svg"></b-img>
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
font-weight: 600;
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
font-weight: 600;
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
