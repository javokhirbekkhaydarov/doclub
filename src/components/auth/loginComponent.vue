<template>
  <div class="auth">
    <div class="auth_parent">
      <div class="auth_left_side">
        <div class="auth_left_top">
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
                data-maska="###-###-##-##"
              />
            </div>
            <div class="login-button">
              <ButtonComponent :name="sendCodeText" :disabled="isDisabled" />
            </div>
          </form>
          <div class="terms_text">
            {{ $t("terms_title_text") }}
            <a href="#" class="terms_link"> {{ $t("terms_title_link") }} </a>
          </div>
        </div>
        <div class="auth_left_bottom">
          <div class="top_texts d-flex">
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
          <div class="bottom_texts d-flex">
            <div class="auth_bottom_texts mr-24">
              <span class="m-0">ООО МЕДТЕХ</span>
            </div>
            <div class="auth_bottom_texts">
              <span class="m-0">Personal data protection</span>
            </div>
          </div>
        </div>
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

<script setup>
import LocaleSwitcher from "@/components/lang/LocaleSwitcher.vue";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import ButtonComponent from "@/components/mini_components/ButtonComponent.vue";
import { vMaska } from "maska";
const form = ref({
  phone: null,
});
const isInputWritten = ref(false);
const isDisabled = ref(true);
const { t, locale } = useI18n();
const sendCodeText = ref(t("send_code"));

const handleInput = () => {
  let phone = form.value.phone.replace(/-/g, "");
  if (phone.length === 10) {
    isDisabled.value = false;
  } else {
    isDisabled.value = true;
  }
  if (form.value.phone && form.value.phone !== "") {
    isInputWritten.value = true;
  } else {
    isInputWritten.value = false;
  }
};

watch(locale, () => {
  sendCodeText.value = t("send_code");
});
</script>

<style scoped></style>
