<template>
  <n-modal
    v-model:show="open_popup"
    transform-origin="center"
    style="margin: auto"
  >
    <n-card
      style="width: 100%; max-width: 470px; min-width: 350px"
      title="Do you want Exit"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <div @click="openAlert" style="cursor: pointer">
          <img alt="close" src="@/assets/img/x.svg" style="width: 28px" />
        </div>
      </template>
      <div class="your_page_card_body center mt-4">
        <div class="card_btn_primary" @click="openAlert">No</div>
        <div class="card_btn_white" @click="logOut">Yes</div>
      </div>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import { NModal, NCard } from "naive-ui";
import { computed } from "vue";
import store from "@/store";
import { useRouter } from "vue-router";
const router = useRouter();
const open_popup = computed(() => store.getters.popup);
const openAlert = () => {
  store.commit("setPopup");
};
const logOut = () => {
  localStorage.removeItem("isLogin");
    router.push(`/auth/login`);
  store.commit("setPopup");

};
</script>
<style></style>
