<template>
  <div class="carousell">
    <button @click="plusSlides(-1)" class="carousell__nav-btn">
      <ArrowIcon :flipX="true" />
    </button>

    <div class="carousell__slider" ref="slider">
      <ul ref="sliderContent">
        <slot></slot>
      </ul>
    </div>

    <button @click="plusSlides(1)" class="carousell__nav-btn right"><ArrowIcon /></button>

    <ul class="carousell__dots">
      <li v-for="(item, i) in slides" :key="i" :class="{ current: i == slideIndex }">
        <button @click="showSlides(i)"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import ArrowIcon from './icons/ArrowIcon.vue'

export default {
  components: {
    ArrowIcon
  },

  data() {
    return {
      slides: 0,
      slideIndex: 1,
      autoScrollInterval: null
    }
  },
  methods: {
    plusSlides(_n) {
      this.showSlides(this.slideIndex + _n)
    },

    showSlides(_newSlideIndex) {
      if (this.$refs.sliderContent == null) {
        this.stopAutoScroll()
        return
      }

      if (_newSlideIndex < 0) {
        this.slideIndex = this.slides - 1
      } else if (_newSlideIndex > this.slides - 1) {
        this.slideIndex = 0
      } else {
        this.slideIndex = _newSlideIndex
      }

      this.$refs.sliderContent.style.transform = `translateX(${-100 * this.slideIndex}%)`

      this.startAutoScroll()
    },

    startAutoScroll() {
      this.stopAutoScroll()

      this.autoScrollInterval = setInterval(() => {
        this.plusSlides(1)
      }, 3000)
    },
    stopAutoScroll() {
      if (this.autoScrollInterval != null) {
        clearInterval(this.autoScrollInterval)
        this.autoScrollInterval == null
      }
    }
  },

  mounted() {
    this.slides = this.$refs.sliderContent.children.length

    this.showSlides(this.slideIndex)

    this.$refs.sliderContent.addEventListener('mouseenter', this.stopAutoScroll)
    this.$refs.sliderContent.addEventListener('mouseleave', this.startAutoScroll)
  }
}
</script>

<style>
.carousell {
  position: relative;
}

.carousell__nav-btn {
  font-size: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: -0.5em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  overflow: hidden;

  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;

  border: 2px solid var(--color-text);
  background-color: var(--blue--dark);
  color: var(--color-text);
}
.carousell__nav-btn.right {
  left: unset;
  right: -0.5em;
}
.carousell__nav-btn:focus svg {
  animation: bounce-out-left-in-right 0.5s ease;
}
.carousell__nav-btn.right:focus svg {
  animation: bounce-out-right-in-left 0.5s ease;
}
.carousell__nav-btn:active svg {
  -webkit-animation: none;
  animation: none;
}
.carousell__nav-btn.right:active svg {
  -webkit-animation: none;
  animation: none;
}
@keyframes bounce-out-right-in-left {
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  39% {
    opacity: 0;
    transform: translateX(100%);
  }
  40% {
    opacity: 0;
    transform: translateX(-100%);
  }
  80% {
    opacity: 1;
    transform: translateX(3%);
  }
  90% {
    transform: translateX(-2%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes bounce-out-left-in-right {
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  39% {
    opacity: 0;
    transform: translateX(-100%);
  }
  40% {
    opacity: 0;
    transform: translateX(100%);
  }
  80% {
    opacity: 1;
    transform: translateX(-3%);
  }
  90% {
    transform: translateX(2%);
  }
  100% {
    transform: translateX(0);
  }
}

.carousell__slider {
  overflow: hidden;
}
.carousell__slider ul {
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
}

.carousell__item {
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  position: relative;
}
.carousell__item > img {
  width: 100%;
}

.carousell__item > a {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 2px 0 4px;

  background-color: var(--blue--dark);
  text-decoration: none;
  box-shadow: 0 4px 0 var(--blue--dark60);

  transform: translateY(0px);
  transition: all 0.1s ease-in-out, border 0.2s ease-in-out;
}
.carousell__item > a:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 var(--blue--dark60);
  opacity: 0.9;
  filter: blur(1px) brightness(0.4);
}
.carousell__item::after {
  content: 'Click to see more';
  font-size: calc(min(5svw, 2rem));
  font-weight: 700;
  line-height: 100%;
  color: black;
  text-align: center;

  padding: 0.2em;
  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;

  filter: brightness(1.5);
  opacity: 0;

  pointer-events: none;

  transition: opacity 0.1s ease-in-out;
}
.carousell__item:has(a:hover)::after {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
.carousell__item > a:active {
  transform: translateY(4px);
  box-shadow: 0 0px 0 var(--blue--dark60);
}

.carousell__item__text {
  padding: 0.5rem 1rem 1.5rem;
}
.carousell__item__text h3 {
  text-shadow: none;
  font-size: 1.4rem;
  margin-bottom: 0.2em;
}

.carousell__dots {
  font-size: 1rem;

  list-style: none;
  margin: 0.5em 0 0 0;
  padding: 0;

  display: flex;
  gap: 0.5em;
  justify-content: center;
}
.carousell__dots > li > button {
  width: 1em;
  height: 1em;
  border-radius: 50%;

  border: none;
  background-color: var(--blue--dark);

  transition: background-color 0.3s ease-in-out;
}
.carousell__dots > li.current > button {
  background-color: var(--color-text);
}
</style>
