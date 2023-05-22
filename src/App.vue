<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      menuActive: null
    }
  }
}
</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="My logo" src="@/assets/logo.svg" width="32" height="32" />
    </RouterLink>

    <button id="hamburger-menu__button" @click="menuActive = !menuActive">
      <img alt="Hamburger menu" src="@/assets/HamburgerMenu.svg" width="32" height="32" />
    </button>

    <nav id="nav-menu" :class="{ active: menuActive, close: menuActive == false }">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/#tools">Tools</RouterLink>
      <RouterLink to="/#portfolio">Portfolio</RouterLink>
      <RouterLink to="/#contact">Contact</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer>
    <p>Copyright© {{ new Date().getFullYear() }} Anton Lehrberg All Rights Reserved</p>
  </footer>
</template>

<style scoped>
header {
  position: fixed;

  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 32px var(--horizontal--padding);

  z-index: 2;
}

#hamburger-menu__button {
  border: none;
  background: none;

  z-index: 2;
}

#nav-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;

  padding: 50px 20px;

  background-color: var(--blue--lighter);

  transform-origin: top;
}
#nav-menu:not(.close) {
  transform: scaleY(0) translateY(-20%);
  opacity: 0;
}
#nav-menu.close {
  animation: nav-menu-fadeout 0.2s forwards ease-in-out;
}
#nav-menu.active {
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

#nav-menu > a {
  color: var(--black);
}

/* FOOTER */
footer {
  padding: 50px var(--horizontal--padding);

  text-align: center;

  --color-text: var(--green-yellow--darker);
  color: var(--color-text);

  scroll-snap-align: start;
}
</style>
