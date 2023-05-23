<script>
export default {
  data() {
    return {
      menuActive: null
    }
  },
  watch: {
    $route(to, from) {
      this.menuActive = false
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
      <RouterLink to="/#home" id="logo">
        <img alt="My logo" src="@/assets/logo.svg" width="32" height="32" />
      </RouterLink>

      <button id="hamburger-menu__button" @click="menuActive = !menuActive">
        <img alt="Hamburger menu" src="@/assets/HamburgerMenu.svg" width="32" height="32" />
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
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
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

#logo {
  z-index: 2;
}

#hamburger-menu__button {
  border: none;
  background: none;

  z-index: 2;
}

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
