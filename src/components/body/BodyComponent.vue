<template>
  <div class="d-flex">
    <SidebarComponent />
    <router-view />
  </div>
</template>

<script>
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";

export default {
  name: "BodyComponent",
  components: { SidebarComponent },
};
</script>

<style scoped></style>
