<template>
  <div class="events_page">
    <div class="center_title">{{ $t("events") }}</div>
    <div class="events_section">
      <div class="events_date">{{ date }}</div>
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
        {{ date }}
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
      <div class="card_btn_white">{{ $t("view_details") }}</div>
    </div>
  </div>
  <div class="events_page">
    <div class="center_title">{{ $t("coming_events") }}</div>
    <div class="events_section">
      <div class="events_date">{{ date }}</div>
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
        {{ date }}
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
  <div class="events_page">
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
        {{ $t("events_description_2") }}
      </div>
      <div class="event_card_description">
        {{ event.description }}
      </div>
      <div class="events_duration">
        {{ date }}
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
      <div class="card_btn_white">{{ $t("view") }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import store from "@/store";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const date = computed(() => store.getters.date);
interface Item {
  type: string;
  title: string;
  topic: string;
  description: string;
  duration: string;
}
const events = ref<Item[]>([]);
const updateData = () => {
  events.value = [
    {
      type: "Offline",
      topic: "Cardiology",
      title: t("events_title"),
      description: t("events_description"),
      duration: "10:00 – 18:00",
    },
  ];
};

watch(locale, () => {
  updateData();
});
updateData();
</script>

<style scoped></style>
