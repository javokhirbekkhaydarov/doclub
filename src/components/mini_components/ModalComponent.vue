<template>
  <n-modal v-model:show="show" transform-origin="center" style="margin: auto">
    <n-card
      style="width: 100%; max-width: 1000px; min-width: 350px"
      title=" "
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <div @click="closeModal" style="cursor: pointer">
          <img alt="close" src="@/assets/img/x.svg" style="width: 20px" />
        </div>

      </template>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consectetur debitis dolore dolorum eos esse exercitationem inventore ipsa modi nemo neque non nulla omnis qui reprehenderit sed, sit, tempore vel?
      </h1>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { NModal, NCard } from "naive-ui";
import {computed, ref} from "vue";
import store from "@/store";
const show = computed(() => store.getters.show);
const closeModal = () => {
  store.commit("setShow", false);
};
</script>

<style scoped></style>
