<script>
import MouseTrailComp from './MouseTrailComp.vue'
import HamburgerMenuIcon from './icons/HamburgerMenuIcon.vue'

export default {
  components: {
    HamburgerMenuIcon,
    MouseTrailComp
  },
  data() {
    return {
      menuActive: null
    }
  },
  watch: {
    $route(to, from) {
      this.menuActive = null
    }
  },

  methods: {
    navMenuPressed(e) {
      const nav = document.getElementById('nav-menu').querySelector('nav')
      if (e.target != nav) {
        this.menuActive = false
      }
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

          <MouseTrailComp uniqueId="mouse-trail--header" />
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
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

  text-underline-offset: 0.15em;

  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 0px 3px 1px var(--blue--dark60);
}
#nav-menu:has(a:hover) a {
  opacity: 0.5;
}
#nav-menu:has(a:hover) a:hover {
  transform: translateX(0.3em);
  opacity: 1;
}

/* media queries */
@media only screen and (min-width: 899px) {
  header > .wrapper {
    max-width: calc(var(--site-max-width) + 64px + 42px);
  }
}

@media only screen and (min-width: 1099px) {
  header > .wrapper {
    max-width: calc(var(--site-max-width) + 64px + 124px);
  }
}
</style>
