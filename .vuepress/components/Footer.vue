<template>
  <div class="footer"> Maksim Kostromin © 2022-present</div>
  <div class="footer">Please, make sure to copyright me 🙃</div>
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
    align-items: center;
    width: 100%;
    height: 3rem;
    min-height: 2rem;
    margin-top: -2rem;
    border-top: none !important;
  }
</style>
