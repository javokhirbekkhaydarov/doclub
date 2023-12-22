<template>
  <div class="home_center">
    <StoriesComponent />
    <NavigationComponent />
    <ModelsComponent />
    <YourPage />
    <RecommendedPage />
  </div>
</template>

<script>
import StoriesComponent from "@/components/home/center/StoriesComponent.vue";
import NavigationComponent from "@/components/home/center/NavigationComponent.vue";
import ModelsComponent from "@/components/home/center/ModelsComponent.vue";
import YourPage from "@/components/home/center/YourPage.vue";
import RecommendedPage from "@/components/home/center/RecommendedPage.vue";

export default {
  name: "HomeCenter",
  components: {
    RecommendedPage,
    YourPage,
    ModelsComponent,
    NavigationComponent,
    StoriesComponent,
  },
};
</script>

<style>
.home_center {
  display: flex;
  /*padding: 32px;*/
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  /*flex: 1 0 0;*/
  border-radius: 16px;
  /*background: var(--Neutral-100, #f9f9fb);*/
}
</style>
