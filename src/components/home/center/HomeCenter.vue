<template>
  <div class="home_center">
    <StoriesComponent />
  </div>
</template>

<script>
import StoriesComponent from "@/components/home/center/StoriesComponent.vue";

export default {
  name: "HomeCenter",
  components: { StoriesComponent },
};
</script>

<style>
.home_center {
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1 0 0;
  border-radius: 16px;
  background: var(--Neutral-100, #f9f9fb);
}
</style>
