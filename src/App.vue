<script>
import { RouterLink, RouterView } from 'vue-router'

import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
import MouseTrailComp from './components/MouseTrailComp.vue'

export default {
  components: {
    HeaderComp,
    FooterComp,
    MouseTrailComp
  }
}
</script>

<template>
  <HeaderComp />

  <RouterView />

  <FooterComp />
</template>
