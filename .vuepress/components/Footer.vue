<template>
  <div class="footer">Copyright © 2022-present Maksim Kostromin</div>
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
