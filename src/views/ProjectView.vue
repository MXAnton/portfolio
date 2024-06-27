<template>
  <main>
    <section v-if="project != null">
      <div class="wrapper">
        <img :src="project.images[0]" alt="Display of homepage of site" />

        <div class="intro">
          <h1 v-if="project.link">
            <a :href="project.link" target="_blank" rel="noopener noreferrer">{{ project.name }}</a>
          </h1>
          <h1 v-else>
            {{ project.name }}
          </h1>
          <p class="time">{{ project.time }}</p>
          <p>{{ project.intro }}</p>
        </div>

        <div v-if="project.link">
          <h2>Live website<span class="small">:</span></h2>
          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="link-1">
            <LinkIcon :size="'1em'" />
            {{ project.link }}
          </a>
        </div>
        <div v-if="project.github">
          <h2>Code<span class="small">:</span></h2>
          <a
            v-for="link in project.github"
            :key="link"
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="link-1"
          >
            <LinkIcon :size="'1em'" />
            {{ link }}
          </a>
        </div>

        <div class="skills-wrapper">
          <h2>Primary skills<span class="small">:</span></h2>
          <div class="skills__row">
            <div class="skill--small" v-for="skill in project.skills">{{ skill }}</div>
          </div>
        </div>

        <div class="more-info">
          <h2>More info<span class="small">:</span></h2>
          <p v-for="paragraph in project.description.split('\n')">{{ paragraph }}</p>
        </div>

        <div class="showcase">
          <h2>Showcase<span class="small">:</span></h2>

          <CarousellComp @changedSlide="onChangedSlide"
            ><li class="carousell__item" v-for="(image, i) in project.images.slice(1)" :key="i">
              <button class="btn--enlarge-image" @click="openEnlargedImage">
                <img :src="image" alt="Image of site" />
              </button></li
          ></CarousellComp>
        </div>

        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="button-1 mt--normal"
          >Try it live <LinkIcon :size="'1em'"
        /></a>
      </div>
    </section>
  </main>

  <dialog
    v-if="project != null"
    @click="closeEnlargedImage"
    ref="enlargedImageModal"
    id="enlarged-image-modal"
    class="enlarged-image-modal"
  >
    <div class="enlarged-image__wrapper">
      <img :src="project.images[slideIndex]" alt="Image of site" />
    </div>
  </dialog>
</template>

<script>
import CarousellComp from '../components/CarousellComp.vue'
import LinkIcon from '../components/icons/LinkIcon.vue'

export default {
  components: {
    CarousellComp,
    LinkIcon
  },
  data() {
    return {
      project: null,
      slideIndex: 0
    }
  },

  methods: {
    openEnlargedImage() {
      this.$refs.enlargedImageModal.showModal()
    },
    closeEnlargedImage() {
      this.$refs.enlargedImageModal.close()
    },

    onChangedSlide(_value) {
      this.slideIndex = _value + 1
    }
  },

  created() {
    this.project = this.$store.state.projects.find(
      (project) => project.id.toString() === this.$route.params.id
    )
    console.log(this.$route.params.id)
    console.log(this.project)
    if (this.project == null) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
main section {
  background-color: var(--blue);
  --color-text: var(--blue--lighter);
  --color-text--dark: var(--blue--light);
}

h1,
h2 {
  text-shadow: none;
}
@media screen and (width < 500px) {
  h1 {
    font-size: 2rem;
  }
}

h2 {
  font-size: 1.2rem;
}

.intro {
  margin-bottom: 0.5rem;
}
.intro p {
  font-size: 1.2rem;
  margin-top: 0.5em;
  line-height: 130%;
}
.intro .time {
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 0.3em;
}

.skills-wrapper {
  margin-top: 1rem;
  margin-bottom: 3rem;
}

.more-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.showcase h2 {
  margin-bottom: 0.7rem;
}

/* #region ENLARGED IMAGE MODAL */
.enlarged-image-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;

  width: 100%;
  height: 100%;
  max-width: unset;
  max-height: unset;

  border: none;
  padding: 0;

  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
}
.enlarged-image-modal[open] {
  display: flex;
}
.enlarged-image__wrapper {
  position: relative;

  max-height: 100%;
  width: calc(min(100%, 160svh));

  box-sizing: border-box;
  padding: 1.6rem 2vw;
}
.enlarged-image-modal[open] .enlarged-image__wrapper {
  animation: grow-in 0.2s ease-in-out;
}
@keyframes grow-in {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}
.enlarged-image__wrapper::after {
  content: 'Click to close';

  font-size: 1rem;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--green-yellow--darker);
  background-color: var(--blue--dark);

  padding: 0.5em;

  position: absolute;
  top: -0.4em;
  right: 2vw;

  cursor: pointer;
}
.enlarged-image-modal img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* #endregion ENLARGED IMAGE MODAL */
</style>
<style>
/* #region CAROUSELL SPECIFICS */
/* CAROUSELL ENLARGABLE IMAGE */
.btn--enlarge-image {
  padding: 0;
  margin: 0;
  background: none;
  border: none;

  width: 100%;
  height: min-content;

  position: relative;
}
.btn--enlarge-image::after {
  content: '';
  background-image: url('../assets/enlarge-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0.5em;

  position: absolute;
  top: 0.2em;
  right: 0.2em;

  font-size: 2rem;

  width: 1em;
  height: 1em;

  border-radius: 50%;
  background-color: var(--blue--dark);
}
.btn--enlarge-image > img {
  width: 100%;
  transition: transform 0.2s ease-in-out;
}
.btn--enlarge-image:hover > img {
  transform: scale(1.05);
}
/* #endregion CAROUSELL SPECIFICS */
</style>
