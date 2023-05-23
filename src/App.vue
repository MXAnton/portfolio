<script>
import { RouterLink, RouterView } from 'vue-router'

import HeaderComp from './components/HeaderComp.vue'

export default {
  components: {
    HeaderComp
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
}

footer > .wrapper {
  width: 100%;
  max-width: var(--site-max-width);

  margin: 0 auto;
}
</style>
