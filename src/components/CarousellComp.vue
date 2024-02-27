<template>
  <div class="carousell">
    <button @click="plusSlides(-1)" class="carousell__nav-btn">{{ '<' }}</button>

    <div class="carousell__slider" ref="slider">
      <ul ref="sliderContent">
        <li class="carousell__item" v-for="item in items" :key="item.name">
          <a :href="item.link" target="_blank" rel="noopener noreferrer" class="link--img">
            <img :src="item.image" alt="Display of homepage of site"
          /></a>

          <div class="carousell__item__text">
            <a :href="item.link" target="_blank" rel="noopener noreferrer" class="link-1">{{
              item.name
            }}</a>
            <p>{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </div>

    <button @click="plusSlides(1)" class="carousell__nav-btn">{{ '>' }}</button>

    <ul class="carousell__dots">
      <li v-for="(item, i) in items" :key="i" :class="{ current: i == slideIndex }">
        <button @click="showSlides(i)"></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },
  data() {
    return {
      slideIndex: 1,
      autoScrollInterval: null
    }
  },
  methods: {
    plusSlides(_n) {
      this.showSlides(this.slideIndex + _n)
    },

    showSlides(_newSlideIndex) {
      if (_newSlideIndex < 0) {
        this.slideIndex = this.items.length - 1
      } else if (_newSlideIndex > this.items.length - 1) {
        this.slideIndex = 0
      } else {
        this.slideIndex = _newSlideIndex
      }

      this.$refs.sliderContent.style.transform = `translateX(${-100 * this.slideIndex}%)`

      if (this.autoScrollInterval != null) {
        clearInterval(this.autoScrollInterval)
      }
      this.autoScrollInterval = setInterval(() => {
        this.plusSlides(1)
      }, 3000)
    }
  },

  mounted() {
    this.showSlides(this.slideIndex)
  }
}
</script>

<style scoped>
.carousell {
  position: relative;
}

.carousell__nav-btn {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;

  position: absolute;
  left: -0.5em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;

  border: 2px solid var(--color-text);
  background-color: var(--blue--dark);
  color: var(--color-text);
}
.carousell__nav-btn:last-of-type {
  left: unset;
  right: -0.5em;
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
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.5rem;

  background-color: var(--blue--dark);
}

.carousell__item__text {
  padding: 0.5rem 1rem 1.5rem;
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
