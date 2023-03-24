<!-- See: https://v2.vuepress.vuejs.org/reference/default-theme/extending.html#layout-slots -->

<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Footer from '@/components/Footer.vue';
import Posts from "../../components/Posts.vue";
</script>

<template>
  <div class="wrapper">
    <div class="content-wrapping-section">
      <ParentLayout>
        <template #page-content-top>
          <Posts />
        </template>
      </ParentLayout>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<style lang="scss">

</style>
