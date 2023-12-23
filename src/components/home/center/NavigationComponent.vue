<template>
  <div class="navigation_section">
    <div class="center_title">{{ $t("navigation") }}</div>
    <div class="navigation_cards">
      <div class="navigation_card" v-for="item in data" :key="item">
        <img :src="item.image" alt="" />
        <div class="navigation_card_title">
          {{ item.title }}
        </div>
        <div class="navigation_card_description">
          {{ item.description }}
        </div>
        <div
          class="navigation_card_bottom d-flex justify-content-between align-items-center center w100"
        >
          <div>{{ $t("open") }}</div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12.5997 8.66665L8.53301 12.7333C8.39967 12.8666 8.26634 12.9333 8.06634 12.9333C7.86634 12.9333 7.73301 12.8666 7.59967 12.7333C7.33301 12.4666 7.33301 12.0666 7.59967 11.8L10.5997 8.79998H3.99967C3.66634 8.79998 3.33301 8.53331 3.33301 8.13331C3.33301 7.73331 3.59967 7.46665 3.99967 7.46665H10.5997L7.59967 4.46665C7.33301 4.19998 7.33301 3.79998 7.59967 3.53331C7.86634 3.26665 8.26634 3.26665 8.53301 3.53331L12.5997 7.59998C12.8663 7.99998 12.8663 8.39998 12.5997 8.66665Z"
              fill="#3A3A5F"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";

const { t, locale } = useI18n();
const data = ref([]);

const updateData = () => {
  data.value = [
    {
      image: "/images/navigation1.png",
      title: t("education"),
      description: t("all_modules"),
    },
    {
      image: "/images/navigation2.png",
      title: t("media"),
      description: t("coming_events"),
    },
    {
      image: "/images/navigation3.png",
      title: t("media"),
      description: t("event_notes"),
    },
  ];
};

watch(locale, () => {
  updateData();
});
updateData(); // Initialize data when the component is mounted
</script>

<style scoped></style>
