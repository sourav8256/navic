<template>
  <div class='main-content'>
    <transition
  enter-active-class="animated fadeIn zoomIn"
  leave-active-class="animated fadeOut zoomOut"
>
      <img
        v-if='show'
        src='~/assets/logoblack.svg'
      >
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>
<style>
@keyframes rotate {
    0% { opacity: 0; transform: scale(0) rotate(-180deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
}

.rotate-enter-active {
    animation: rotate 0.2s;
}

.rotate-leave-active {
    animation: rotate 0.2s reverse;
}
</style>
