<template>
  <div class="auth">
    <div class="auth_parent">
      <div class="auth_left_side">
        <div class="lang_switch">
          <LocaleSwitcher />
        </div>
        <div class="project_title">docmed.space</div>
        <div class="auth_title">
          <span class="main_color">Closed</span> <br />

          Evidence-based <br />
          Medicine Club
        </div>
        <form action="#" class="form_parent">
          <label for="phone" class="label_title">
            {{ $t("phone_number") }}
          </label>
          <div
            class="input_parent"
            ref="phone_parent"
            :class="{ active_border: isInputWritten }"
          >
            <div class="region_number">+971</div>
            <img src="@/assets/icons/down.svg" alt="" />
            <input
              type="text"
              ref="phone"
              id="phone"
              @input="handleInput"
              class="input"
              v-model="form.phone"
              v-maska
              data-maska="##-###-##-##"
            />
          </div>
        </form>
      </div>
      <div class="auth_right_side">
        <img
          class="auth_banner_image"
          src="@/assets/img/auth_banner.png"
          alt="banner"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LocaleSwitcher from "@/components/lang/LocaleSwitcher.vue";
import { ref } from "vue";
import { vMaska } from "maska";
const form = ref({
  phone: null,
});
const isInputWritten = ref(false);

const handleInput = () => {
  if (form.value.phone && form.value.phone !== "") {
    isInputWritten.value = true;
  } else {
    isInputWritten.value = false;
  }
};
</script>

<style scoped></style>
