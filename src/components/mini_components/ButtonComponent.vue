<template>
  <button class="btn">
    {{ name }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style>
.btn {
  display: flex;
  height: 44px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 12px;
  border: 0;
  max-width: 370px;
  width: 100%;
  font-family: Open-Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  cursor: pointer;
  background: var(--primary);
  color: var(--white);
  text-align: center;
}
.btn:disabled {
  background: var(--Primary-200, #f1ecff);
  color: var(--Primary-300, #D8D1FF);
}
</style>
