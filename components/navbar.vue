<template>
  <div class="parallax">
      <h1 class="">
          A parrot
      </h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.parallax {
  /* The image used */
  background-image: url("~/assets/bgparralax.gif");

  /* Set a specific height */

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: fit-content;
  width:auto;
  display: block;
}

</style>
