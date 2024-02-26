<template>
  <div class="example">
    <a :href="link" target="_blank" rel="noopener noreferrer" class="link--img"><slot></slot></a>

    <div class="example__content">
      <div class="content__text">
        <a :href="link" target="_blank" rel="noopener noreferrer" class="link-1">{{ name }}</a>
        <p>{{ description }}</p>
      </div>

      <div class="skills-wrapper">
        <div class="skill--small" v-for="skill in skills.split(',')">{{ skill }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    link: String,
    description: String,
    skills: String
  }
}
</script>

<style scoped>
.example {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;

  background-color: var(--blue--dark);

  padding-bottom: 1rem;
}

.example__content {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  padding: 0.75rem;
}

.content__text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.example__content .skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.5rem;

  margin-top: 0.25rem;
}
</style>
