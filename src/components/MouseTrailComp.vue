<script>
export default {
  props: {
    uniqueId: String
  },
  data() {
    return {
      trail: null,
      trailRadius: null,
      trailSpeed: 0.03,
      trailPos: { x: 0, y: 0 },

      lastScrollInsideParent: 0
    }
  },

  mounted() {
    this.initMouseTrail()
  },
  methods: {
    initMouseTrail() {
      this.trail = document.getElementById(this.uniqueId)
      this.trailRadius = this.trail.offsetWidth / 2
      this.trailPos = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }

      window.addEventListener('mousemove', this.mouseMove)
      window.addEventListener('scroll', this.scrollMove)

      this.moveElement()
    },

    mouseMove(event) {
      // Offset of parent element (section) to top of screen
      const viewportOffset = this.trail.parentElement.getBoundingClientRect()

      this.trailPos = {
        x: event.clientX,
        y: event.clientY - viewportOffset.y
      }
    },
    scrollMove() {
      const scrollInsideParent = window.scrollY - this.trail.parentElement.offsetTop
      // Sets the trailPos.y to the same pos it was earlier relative to screen
      this.trailPos.y += scrollInsideParent - this.lastScrollInsideParent
      // Set new trailPos.y to center of screen
      // this.trailPos.y = scrollInsideParent + window.innerHeight / 2

      this.lastScrollInsideParent = scrollInsideParent
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
  <div class="mouse-trail" :id="uniqueId"></div>
</template>

<style scoped>
/* MOUSE TRAIL */
.mouse-trail {
  position: absolute;

  width: 300%;
  aspect-ratio: 1;

  border-radius: 50%;

  z-index: -1;

  background: radial-gradient(
    var(--blue--light),
    var(--blue--lighter),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );

  animation: mouse-trail-breathe 4s infinite ease-in-out;
}
@keyframes mouse-trail-breathe {
  0% {
    transform: scaleX(1) scaleY(1) translateX(0%) translateY(0%);
  }
  20% {
    transform: scaleX(.9) scaleY(1.2) translateX(2%) translateY(-1%);
  }
  50% {
    transform: scaleX(1.2) scaleY(1) translateX(1%) translateY(1%);
  }
  75% {
    transform: scaleX(1.1) scaleY(1.1) translateX(-2%) translateY(-1%);
  }
  100% {
    transform: scaleX(1) scaleY(1) translateX(0%) translateY(0%);
  }
}

/* Different styling */
#mouse-trail--home,
#mouse-trail--contact,
#mouse-trail--footer {
  background: radial-gradient(
    var(--blue),
    var(--blue--dark),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
}

#mouse-trail--tools {
  background: radial-gradient(
    var(--blue--light),
    var(--green-yellow),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
}

#mouse-trail--portfolio {
  background: radial-gradient(
    var(--green-yellow),
    var(--blue),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
  opacity: 0.4;
}
</style>
