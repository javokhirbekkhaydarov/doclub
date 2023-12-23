<template>
  <div class="right_section">
<CalendarComponent />
  </div>
</template>

<script>
import CalendarComponent from "@/components/home/right/CalendarComponent.vue";

export default {
  name: "HomeRight",
  components: {CalendarComponent},
};
</script>

<style>
 .main_content .right_section {
  display: flex;
  padding: 32px;
   justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1 0 0;
  border-radius: 16px;
  background: var(--Neutral-100, #f9f9fb);
  width: 470px !important;
}
</style>
