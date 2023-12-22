<template>
  <div class="navigation_section">
    <div class="center_title">Your modules</div>
    <div class="model_cards">
      <div class="model_card" v-for="item in data" :key="item">
        <div class="model_heading d-flex">
          <div class="active_model">
            {{ item.activeModel }}
          </div>
          <div class="inactive_model">
            {{ item.inActiveModel }}
          </div>
        </div>
        <div class="model_card_description">
          {{ item.description }}
        </div>
        <div class="model_card_bottom d-flex justify-content-start">
          <div>Online test</div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="8" cy="8" r="2" fill="#968FA9" />
          </svg>
          <div>materials</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const data = ref([
  {
    activeModel: "Pediatrics",
    inActiveModel: "Pulmonology",
    description: " Antibacterial therapy. Pediatric pulmonology",
  },
  {
    activeModel: "Pediatrics",
    inActiveModel: "Pulmonology",
    description: " Antibacterial therapy. Pediatric pulmonology",
  },
]);
</script>

<style scoped></style>
