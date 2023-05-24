<script>
export default {
  data() {
    return {
      trail: null,
      trailRadius: null,
      trailSpeed: 0.05,
      trailPos: { x: 0, y: 0 }
    }
  },

  mounted() {
    this.initMouseTrail()
  },
  methods: {
    initMouseTrail() {
      this.trail = document.getElementById('header-mouse-trail')
      this.trailRadius = this.trail.offsetWidth / 2
      window.addEventListener('mousemove', this.mouseMove)
      this.moveElement()
    },
    mouseMove(event) {
      this.trailPos = { x: event.clientX, y: event.clientY }
    },
    moveElement() {
      const targetX = this.trailPos.x - this.trailRadius
      const targetY = this.trailPos.y - this.trailRadius
      const dx = targetX - this.trail.offsetLeft
      const dy = targetY - this.trail.offsetTop
      this.trail.style.left = dx * this.trailSpeed + this.trail.offsetLeft + 'px'
      this.trail.style.top = dy * this.trailSpeed + this.trail.offsetTop + 'px'
      requestAnimationFrame(this.moveElement)
    }
  }
}
</script>

<template>
  <div id="header-mouse-trail"></div>
</template>

<style scoped>
/* MOUSE TRAIL */
#header-mouse-trail {
  position: absolute;

  width: 250%;
  aspect-ratio: 1;

  border-radius: 50%;

  z-index: -1;

  background: radial-gradient(
    var(--blue--light),
    var(--blue--lighter),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
}
</style>
