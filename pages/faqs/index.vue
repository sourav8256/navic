<template>
<section class="faq">
    <h1 class="section-header white">FREQUENTLY ASKED QUESTIONS</h1>
  <div class="accordion accordian-body" role="tablist">
    <b-icon icon="battery-full" style="color: #7952b3;"></b-icon>

  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-1 variant="dark">Who is the course for?</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white">Marketing & communications students from the age of 8 to 80.We highly recommend this course to 3kinds of students:
              1. Students in graduation fields of Digital marketing, BMS/BMS, Management, Arts, Commerce, Communications, Advertising and Media
              2. MBAs and Post graduates in Marketing streams
              3. Professionals in Digital marketing, PR, Advertising, Media Planning & buying and Journalists If you do well in EVOLVE, you’ll have more practical knowledge than half your peers and seniors in your current or future organisation.</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

 <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-2 variant="dark">Do you only have LIVE online lectures ?</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

 <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">How many students per batch ?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
     <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">How do you grade students ?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
     <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">What is the passing grade for the course ?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
     <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">What do I do if I miss a session due to an emergency ?
</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
     <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">What if I have more questions or I may not be able to come up with any during EVOLVE?
</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
     <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">Will there be projects ?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
     <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">Are you affiliated with any universities ?
</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
     <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">Do you offer internships ?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
  <Form />
</section>

</template>

<script>
export default {

}
</script>

<style>
.faq{
    background: #242728;
}
.darkbody{
background: #242728;
box-shadow: inset -4px -4px 4px rgba(65, 65, 65, 0.25), inset 4px 4px 4px rgba(2, 2, 2, 0.25);
border-radius: 10px;
}
.accordian-body{
    margin:0px 150px;
}
</style>
