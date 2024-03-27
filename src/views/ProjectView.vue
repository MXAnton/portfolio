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
          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="link-1"
            >{{ project.link }} <LinkIcon :size="'1em'"
          /></a>
        </div>
        <div v-if="project.github">
          <h2>Code<span class="small">:</span></h2>
          <a :href="project.github" target="_blank" rel="noopener noreferrer" class="link-1"
            >{{ project.github }} <LinkIcon :size="'1em'"
          /></a>
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

          <CarousellComp
            ><li class="carousell__item" v-for="(image, i) in project.images.slice(1)" :key="i">
              <img :src="image" alt="Image of site" /></li
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
      project: null
    }
  },
  created() {
    this.project = this.$store.state.projects[this.$route.params.projectIndex]
    if (this.project == null) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  text-shadow: none;
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
</style>
<style>
.carousell__dots > li > button {
  background-color: var(--blue);
}
.carousell__dots > li.current > button {
  background-color: var(--color-text);
}
</style>
