<template>
  <div class="stories_section">
    <div class="center_title">Stories</div>
    <div class="stories_images">
      <div class="stories_image"  v-for="image in images" :key="image">
      <img :src="image.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const images = ref([
  {
    url: "/images/1.png",
  },
  {
    url: "/images/2.png",
  },
  {
    url: "/images/3.png",
  },
  {
    url: "/images/4.png",
  },
  {
    url: "/images/5.png",
  },
]);
</script>

<style scoped></style>
