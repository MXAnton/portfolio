<script>
import MouseTrailComp from './MouseTrailComp.vue'

export default {
  components: {
    MouseTrailComp
  },
  data() {
    return {
      bubbleWrapper: null
    }
  },

  mounted() {
    this.initBubbles()
  },

  methods: {
    initBubbles() {
      this.bubbleWrapper = document.getElementById('bubble-wrapper')

      // window.addEventListener('mousemove', this.animateBubble)

      // Create an intersection observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the element is visible on the screen, start animating bubbles
            window.addEventListener('mousemove', this.animateBubble)
          } else {
            // If the element is not visible, stop animating bubbles
            window.removeEventListener('mousemove', this.animateBubble)
          }
        })
      })

      // Observe the element with the ID 'bubble-wrapper'
      observer.observe(this.bubbleWrapper)
    },

    animateBubble(e) {
      const x = e.clientX

      const bubble = document.createElement('div')
      bubble.className = 'bubble'
      bubble.style.left = `${x}px`

      this.bubbleWrapper.appendChild(bubble)

      setTimeout(() => {
        this.bubbleWrapper.removeChild(bubble)
      }, 3000)
    }
  }
}
</script>

<template>
  <footer>
    <div class="wrapper">
      <p>Copyright© {{ new Date().getFullYear() }} Anton Lehrberg All Rights Reserved</p>
    </div>

    <MouseTrailComp uniqueId="mouse-trail--footer" />

    <div id="bubble-wrapper"></div>
  </footer>
</template>

<style scoped>
/* BUBBLE */
#bubble-wrapper {
  height: 100%;
  width: 100%;

  position: absolute;
  left: 0px;
  bottom: 0px;

  overflow: hidden;
  pointer-events: none;
}

:deep(.bubble) {
  height: 300px;
  width: 300px;

  background-color: var(--green-yellow--darker);
  opacity: 0.1;
  border-radius: 100%;

  position: absolute;
  left: 50%;
  top: 100%;

  animation: wave 1s ease-in-out infinite;
}
@keyframes wave {
  from,
  to {
    transform: translate(-50%, 0%);
  }

  50% {
    transform: translate(-50%, -10%);
  }
}

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
