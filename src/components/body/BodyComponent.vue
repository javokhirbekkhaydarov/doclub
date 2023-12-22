<template>
<SidebarComponent/>
  <router-view/>
</template>

<script>
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";

export default {
  name: "BodyComponent",
  components: {SidebarComponent}
}
</script>

<style scoped>

</style>