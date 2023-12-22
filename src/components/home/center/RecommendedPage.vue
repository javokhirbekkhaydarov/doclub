<template>
  <div class="recommended_page">
    <div
      class="recommended_page_heading d-flex justify-content-between center w100"
    >
      <div class="center_title">Recommended media</div>
      <div class="read_more">Read more</div>
    </div>
    <div class="recommended_page_body">
      <div class="recommended_page_item" v-for="item in news" :key="item">
        <div class="news_image relative">
          <img class="img-fluid" :src="item.image" alt="" />
          <div class="news_item">
            <div class="news_title">
              {{ item.title }}
            </div>
            <div class="news_title">
              {{ item.level }}
            </div>
          </div>
        </div>
        <div class="news_description">
          {{item.description}}
        </div>
        <div class="news_viewers">
          {{item.views}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const news = ref([
  {
    image: "/images/new1.png",
    title: "news",
    level: "beginners",
    description:
      "Inflammatory bowel disease and mental disorders found to be linked",
    views: "Not viewed",
  },
  {
    image: "/images/new2.png",
    title: "news",
    level: "beginners",
    description: "Uzbekistan will strengthen its fight against tuberculosis",
    views: "Not viewed",
  },
]);
</script>

<style scoped></style>
