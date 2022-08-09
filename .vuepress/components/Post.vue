<template>
  <router-link :to="path">
    {{ title }}
  </router-link>
</template>

<script>
export default {
  name: 'Post',
  props: {
    path: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: 'me-2020-11.jpeg',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>

</style>
