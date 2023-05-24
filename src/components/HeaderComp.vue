<script>
import HamburgerMenuIcon from './icons/HamburgerMenuIcon.vue'

export default {
  components: {
    HamburgerMenuIcon
  },
  data() {
    return {
      menuActive: null,
      trail: null,
      trailRadius: null,
      trailSpeed: 0.05,
      trailPos: { x: 0, y: 0 }
    }
  },
  watch: {
    $route(to, from) {
      this.menuActive = false
    }
  },

  mounted() {
    this.initMouseTrail()
  },
  methods: {
    navMenuPressed(e) {
      const nav = document.getElementById('nav-menu').querySelector('nav')
      if (e.target != nav) {
        this.menuActive = false
      }
    },
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
  <header>
    <div class="wrapper">
      <RouterLink to="/#home" id="logo" class="button-2">
        <img alt="My logo" src="@/assets/logo.svg" width="32" height="32" />
      </RouterLink>

      <button id="hamburger-menu__button" class="button-2" @click="menuActive = !menuActive">
        <HamburgerMenuIcon :menuActive="menuActive" />
      </button>

      <div
        id="nav-menu"
        :class="{ active: menuActive, close: menuActive == false }"
        @click="navMenuPressed"
      >
        <nav>
          <div class="wrapper">
            <RouterLink to="/#home">Home</RouterLink>
            <RouterLink to="/#tools">Tools</RouterLink>
            <RouterLink to="/#portfolio">Portfolio</RouterLink>
            <RouterLink to="/#contact">Contact</RouterLink>
          </div>

          <div id="header-mouse-trail"></div>
        </nav>
      </div>
    </div>
  </header>
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

/* HEADER */
header {
  position: fixed;

  width: 100%;

  padding: 32px var(--horizontal--padding);

  z-index: 2;
}
header > .wrapper {
  width: 100%;
  max-width: var(--site-max-width);

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
}

#logo,
#hamburger-menu__button {
  z-index: 2;
}

/* NAV MENU */
#nav-menu {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 0;

  transition: background-color 0.1s ease-in-out;
}
#nav-menu.active {
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);
}
#nav-menu > nav {
  overflow: hidden;

  width: 100%;

  padding: 100px var(--horizontal--padding) 50px;

  background-color: var(--blue--lighter);

  transform-origin: top;
}

#nav-menu:not(.close) nav {
  transform: scaleY(0) translateY(-20%);
  opacity: 0;
}
#nav-menu.close nav {
  animation: nav-menu-fadeout 0.2s forwards ease-in-out;
}
#nav-menu.active nav {
  animation: nav-menu-fadein 0.2s forwards ease-in-out;
}
@keyframes nav-menu-fadein {
  from {
    transform: scaleY(0) translateY(-20%);
    opacity: 0;
  }
  to {
    transform: scaleY(1) translateY(0);
    opacity: 1;
  }
}
@keyframes nav-menu-fadeout {
  from {
    transform: scaleY(1) translateY(0);
  }
  to {
    transform: scaleY(0) translateY(-20%);
    opacity: 0;
  }
}

#nav-menu > nav > .wrapper {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: var(--site-max-width);
  margin: 0 auto;
}

#nav-menu a {
  color: var(--black);
  font-size: 2rem;
  line-height: 2em;
}
#nav-menu:has(a:hover) a {
  opacity: 0.5;
}
#nav-menu:has(a:hover) a:hover {
  transform: translateX(0.3em);
  opacity: 1;
}
</style>
