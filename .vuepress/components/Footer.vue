<template>
  <div class="footer"> Maksim Kostromin © 2022-present 🙃</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped lang="scss">
  div.footer {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 3rem;
    border-top: none !important;
  }
</style>
