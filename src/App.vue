<script>
import { RouterLink, RouterView } from 'vue-router'

import HeaderComp from './components/HeaderComp.vue'
import MouseTrailComp from './components/MouseTrailComp.vue'

export default {
  components: {
    HeaderComp,
    MouseTrailComp
  }
}
</script>

<template>
  <HeaderComp />

  <RouterView />

  <footer>
    <div class="wrapper">
      <p>Copyright© {{ new Date().getFullYear() }} Anton Lehrberg All Rights Reserved</p>
    </div>

    <MouseTrailComp uniqueId="mouse-trail--footer" />
  </footer>
</template>

<style scoped>
/* FOOTER */
footer {
  width: 100%;

  padding: 50px var(--horizontal--padding);

  /* text-align: center; */

  --color-text: var(--green-yellow--darker);
  color: var(--color-text);
  font-size: 0.8rem;

  scroll-snap-align: start;

  position: relative;
  overflow: hidden;
  z-index: 1;
}

footer > .wrapper {
  width: 100%;
  max-width: var(--site-max-width);

  margin: 0 auto;
}
</style>
