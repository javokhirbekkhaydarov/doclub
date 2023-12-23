<template>
  <div class="d-flex w100 justify-content-start parent_layout">
    <SidebarComponent />
    <router-view />
    <MobileBottomBar />
  </div>
</template>

<script>
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
import MobileBottomBar from "@/components/home/MobileBottomBar.vue";

export default {
  name: "BodyComponent",
  components: { MobileBottomBar, SidebarComponent },
};
</script>

<style scoped></style>
