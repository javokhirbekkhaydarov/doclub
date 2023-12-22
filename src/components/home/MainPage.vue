<template>
  <div class="main_page">
    <HeadingComponent />
    <div class="d-flex">
      <HomeCenter />
      <HomeRight />
    </div>
  </div>
</template>

<script>
import HeadingComponent from "@/components/home/HeadingComponent.vue";
import HomeCenter from "@/components/home/HomeCenter.vue";
import HomeRight from "@/components/home/HomeRight.vue";

export default {
  name: "MainPage",
  components: { HomeRight, HomeCenter, HeadingComponent },
};
</script>

<style scoped></style>
