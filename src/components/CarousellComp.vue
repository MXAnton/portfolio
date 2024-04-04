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

      this.$emit('changedSlide', this.slideIndex)
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

<style scoped>
.carousell {
  position: relative;
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

/* #region NAV BUTTON */
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
  animation: bounce-out-left-in-right 0.3s ease;
}
.carousell__nav-btn.right:focus svg {
  animation: bounce-out-right-in-left 0.3s ease;
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
    transform: translateX(0%) scaleY(1);
  }
  39% {
    opacity: 0;
    transform: translateX(100%) scaleY(0.8);
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
    transform: translateX(-2%) scaleY(0.8);
  }
  100% {
    transform: translateX(0) scaleY(1);
  }
}
@keyframes bounce-out-left-in-right {
  0% {
    opacity: 1;
    transform: translateX(0%) scaleY(1);
  }
  39% {
    opacity: 0;
    transform: translateX(-100%) scaleY(0.8);
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
    transform: translateX(2%) scaleY(0.8);
  }
  100% {
    transform: translateX(0) scaleY(1);
  }
}
/* #endregion NAV BUTTON */

/* #region DOTS */
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
/* #endregion DOTS */
</style>
<style>
.carousell__item {
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  position: relative;
}
</style>
