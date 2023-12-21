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
            <div v-if="state === 'phone'">
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
                <ButtonComponent
                  @click="sendData"
                  :name="sendCodeText"
                  :disabled="isDisabled"
                />
              </div>
            </div>
            <div v-else-if="state === 'get_code'">
              <div class="get_code_heading d-flex">
                <span class="label_title">The code was sent.</span>
                <span @click="state = 'phone'" class="change_phone"
                  >Change the number</span
                >
              </div>
              <div class="otp-input">
                <input
                  v-for="(digit, index) in codeLength"
                  :key="index"
                  ref="codeInputs"
                  v-model="code[index]"
                  @keyup="onInput(index, $event)"
                  maxlength="1"
                  v-maska
                  data-maska="#"
                  class="code-input"
                />
              </div>

              <div class="login-button">
                <ButtonComponent
                  @click="sendData"
                  :name="getCodeText"
                  :disabled="isDisabled"
                />
              </div>
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

<script setup lang="ts">
import LocaleSwitcher from "@/components/lang/LocaleSwitcher.vue";

import { ref, watch } from "vue";

import { useI18n } from "vue-i18n";
import ButtonComponent from "@/components/mini_components/ButtonComponent.vue";
import { vMaska } from "maska";
const form = ref({
  phone: "3241234123432",
});
const isInputWritten = ref(false);
const isDisabled = ref(true);
const { t, locale } = useI18n();
const sendCodeText = ref(t("send_code"));
const getCodeText = ref(t("get_new_code"));
const state = ref("phone");

const codeLength = 4; // Set the length of OTP code
const code = Array.from({ length: codeLength }, () => "");
const codeInputs = ref<HTMLInputElement[]>([]);

const onInput = (index: number, event: KeyboardEvent) => {

  const { keyCode, key } = event;

  if (keyCode === 8) {
    if (code[index] === "") {
      if (index > 0) {
        codeInputs.value[index - 1].focus();
        code[index - 1] = "";
      }
    } else {
      code[index] = "";
    }
  } else if (!isNaN(parseInt(key)) && index < codeLength - 1) {
    code[index] = event.key;
    codeInputs.value[index + 1].focus();
  } else if (isNaN(parseInt(key)) && index < codeLength - 1) {
    code[index] = key;
    codeInputs.value[index + 1]?.focus();
  }
};

// const onInput = (index: number, event: InputEvent) => {
//   console.log(code.join(""));
//   if (event.data !== null) {
//     if (index < codeLength - 1) {
//       codeInputs.value[index + 1].focus();
//     }
//   } else {
//     if (index > 0) {
//       codeInputs.value[index - 1].focus();
//     }
//   }
// };
const handleInput = () => {
  let phone = form.value.phone.replace(/-/g, "");
  isDisabled.value = phone.length !== 10;
  isInputWritten.value = !!(form.value.phone && form.value.phone !== "");
};

watch(locale, () => {
  sendCodeText.value = t("send_code");
  getCodeText.value = t("get_new_code");
});

//   send data
const sendData = () => {
  if (state.value === "phone") {
    state.value = "get_code";
    if (state.value === "get_code") {
      setTimeout(() => {
        codeInputs?.value[0]?.focus();
      }, 100);
    }
  }
};
</script>

<style scoped></style>
