<template>
  <main>
    <section>
      <div class="wrapper">
        <h1>Thanks for contacting me!</h1>
        <h3>I will reply as soon as I can :)</h3>

        <code class="code--form"
          ><span class="code__title">email</span>: "{{ email }}"<br /><span class="code__title"
            >message</span
          >: "{{ message }}"</code
        >

        <RouterLink to="/" class="link-1">Back to home</RouterLink>
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
      email: null,
      message: null
    }
  },
  created() {
    this.email = this.$route.query.email
    this.message = this.$route.query.message
  }
}
</script>

<style scoped>
.link-1 {
  margin-top: 1rem;
}
</style>
