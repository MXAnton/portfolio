<template>
  <main>
    <section>
      <div class="wrapper">
        <div class="header">
          <h1>Thanks for contacting me!</h1>
          <p>I will reply as soon as I can :)</p>
        </div>

        <code class="code--form"
          ><span class="code__title">email</span>: "{{ email }}"<br /><span class="code__title"
            >message</span
          >: "{{ message }}"</code
        >

        <RouterLink to="/" class="button-1">Back to home</RouterLink>
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
.button-1 {
  margin-top: 1rem;
  width: fit-content;
  padding: 0.8em 1.5em;
}

.header p {
  margin-top: 0.4em;
}
</style>
