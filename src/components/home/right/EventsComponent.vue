<template>
  <div class="events_page">
    <div class="center_title">Events</div>
    <div class="events_section">
      <div class="events_date">4 September</div>
    </div>

    <div class="events_card" v-for="event in events" :key="event">
      <div class="model_heading d-flex">
        <div class="active_model">
          {{ event.type }}
        </div>
        <div class="inactive_model">
          {{ event.topic }}
        </div>
      </div>
      <div class="event_card_body">
        {{ event.title }}
      </div>
      <div class="event_card_description">
        {{ event.description }}
      </div>
      <div class="events_duration">
        3 september
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="8" cy="8" r="2" fill="#968FA9" />
        </svg>
        {{ event.duration }}
      </div>
      <div class="card_btn_white">View details</div>

    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const events = ref([
  {
    type: "Offline",
    topic: "Cardiology",
    title:
      "Patient with AF and diabetes mellitus. How to improve the life prognosis of a comorbid patient?",
    description:
      'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
    duration: "10:00 – 18:00",
  },
]);
</script>

<style scoped></style>
