<template>
  <main>
    <section v-if="project != null">
      <div class="wrapper">
        <RouterLink to="/" class="link-1">Back to home</RouterLink>

        <h1>{{ project.name }}</h1>
        <h3>I will reply as soon as I can :)</h3>
      </div>

      <MouseTrailComp uniqueId="mouse-trail--thanks" />
    </section>
  </main>
</template>

<script>
import MouseTrailComp from '../components/MouseTrailComp.vue'

export default {
  components: { MouseTrailComp },
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
.link-1 {
  margin-top: 1rem;
}
</style>
