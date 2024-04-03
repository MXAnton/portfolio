<template>
  <svg
    v-if="flipX"
    :width="size"
    :height="size"
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M600 399.667H200M200 399.667L366.667 233M200 399.667L366.667 566.333"
      :stroke="color"
      stroke-width="66.6667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18M18 12L13 7M18 12L13 17"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '2em'
    },

    color: {
      type: String,
      default: 'currentColor'
    },

    flipX: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.flip-x path {
  transform: rotate(180deg);
}
</style>
