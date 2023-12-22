<template>
  <n-modal v-model:show="show" transform-origin="center" style="margin: auto">
    <n-card
      style="width: 100%; max-width: 770px; min-width: 350px"
      :title="$t('what_should')"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <div @click="closeModal" style="cursor: pointer">
          <img alt="close" src="@/assets/img/x.svg" style="width: 28px" />
        </div>
      </template>
      <div class="modal_content">
        {{ $t("modal_text_1") }}
        <br />

        <span style="margin-top: 8px; display: flex">
          {{ $t("modal_text_2") }}
        </span>
      </div>
      <div class="modal_bottom_texts d-flex">
        <div class="auth_bottom_texts mr-24">
          <img src="@/assets/icons/mail.svg" alt="" />
          <a href="mailto:help@decmed.space" target="_blank"
            >help@decmed.space</a
          >
        </div>
        <div class="auth_bottom_texts">
          <img src="@/assets/icons/telegram.svg" alt="" />
          <span>Chatbot</span>
        </div>
      </div>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { NModal, NCard } from "naive-ui";
import { computed } from "vue";
import store from "@/store";
const show = computed(() => store.getters.show);
const closeModal = () => {
  store.commit("setShow", false);
};
</script>

<style>
.n-card {
  border-radius: 12px;
  padding: 40px;
}
.n-card > .n-card-header {
  padding: 0;
}
.n-card > .n-card__content {
  padding: 0;
}
.n-card-header__main {
  color: var(--Text-500, #413663);

  /* Headers/H4 */
  font-family: Ubuntu-Bold, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
}
.modal_content {
  margin: 32px 0;
  color: var(--Text-400, #78708f);

  /* Captions/Cap2 - Regular */
  font-family: Open-Sans, sans-serif !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}
.modal_content span {
  /* Captions/Cap2 - Regular */
  font-family: Open-Sans, sans-serif !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}
</style>
