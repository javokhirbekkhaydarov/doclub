<template>
  <div class="recommended_page">
    <div
      class="recommended_page_heading d-flex justify-content-between center w100"
    >
      <div class="center_title">{{ $t("recommended_media") }}</div>
      <div class="read_more">{{ $t("read_more") }}</div>
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
          {{ item.description }}
        </div>
        <div class="news_viewers">
          {{ item.views }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";

const { t, locale } = useI18n();
const news = ref([]);

const updateData = () => {
  news.value = [
    {
      image: "/images/new1.png",
      title: t("news"),
      level: t("level"),
      description: t("recommended_description"),
      views: t("view"),
    },
    {
      image: "/images/new2.png",
      title: t("news"),
      level: t("level"),
      description: t("recommended_description2"),
      views: t("view"),
    },
  ];
};

watch(locale, () => {
  updateData();
});
updateData();
</script>

<style scoped></style>
