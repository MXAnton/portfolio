<template>
  <svg
    id="hamburger-menu-icon"
    :class="{ close: menuActive == true }"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="16" fill="#001B2E" />
    <rect id="line1" x="9.5" y="9" width="14" height="2" rx="1" fill="#84E296" />
    <rect id="line2" x="6.5" y="13" width="17" height="2" rx="1" fill="#84E296" />
    <rect id="line3" x="11.5" y="17" width="12" height="2" rx="1" fill="#84E296" />
    <rect id="line4" x="18.5" y="21" width="5" height="2" rx="1" fill="#84E296" />
  </svg>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    menuActive: null
  },
  data() {
    return {
      tl: null
    }
  },
  watch: {
    menuActive(to, from) {
      if (this.menuActive) {
        this.tl = gsap
          .timeline({
            defaults: {
              ease: 'sine'
            }
          })
          .to('#line1', { scaleX: 0, duration: 0.2, transformOrigin: 'center' })
          .to('#line1', { y: 6, duration: 0.2 }, 0)
          .to('#line4', { scaleX: 0, duration: 0.2, transformOrigin: 'center' }, 0)
          .to('#line4', { y: -6, duration: 0.2 }, 0)
          .to('#line2', { rotate: 45, duration: 0.2, transformOrigin: 'center' }, 0)
          .to('#line2', { y: 2, duration: 0.2 }, 0)
          .to('#line2', { x: 1, duration: 0.2 }, 0)
          .to('#line3', { rotate: -45, duration: 0.2, transformOrigin: 'center' }, 0)
          .to('#line3', { width: 17, duration: 0.2 }, 0)
          .to('#line3', { y: 0, duration: 0.2 }, 0)
          .to('#line3', { x: -3, duration: 0.2 }, 0)
      } else if (this.menuActive == false) {
        if (this.tl) {
          this.tl.reverse()
        }
      }
    }
  }
}
</script>
