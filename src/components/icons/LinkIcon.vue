<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27 12.5L26.999 5.001L19.5 5"
      :stroke="color"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.9961 14.0039L26.9961 5.00391"
      :stroke="color"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 18V26C23 26.2652 22.8946 26.5196 22.7071 26.7071C22.5196 26.8946 22.2652 27 22 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9H14"
      :stroke="color"
      stroke-width="3"
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
      default: '2rem'
    },

    color: {
      type: String,
      default: 'CurrentColor'
    }
  }
}
</script>
