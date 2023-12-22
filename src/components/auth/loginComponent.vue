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
          <form action="#" class="form_parent position-relative">
            <div v-if="state === 'phone'" class="relative">
              <label for="phone" class="label_title">
                {{ $t("phone_number") }}
              </label>
              <div
                class="input_parent position-relative"
                ref="phone_parent"
                :class="{ active_border: isInputWritten }"
              >
                <div class="region_number" @click="toggleRegions">
                  {{ selectedRegion }}
                </div>
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
                <div class="select_regions" v-if="showRegions">
                  <div
                    class="select_regions_heading d-flex justify-content-between w100"
                  >
                    <div class="cookie_heading_text">
                      {{$t('select_region')}}
                    </div>
                    <img
                      alt="close"
                      src="@/assets/img/x.svg"
                      class="pointer"
                      style="width: 24px"
                      @click="toggleRegions"
                    />
                  </div>
                  <div class="regions w100">
                    <div
                      v-for="country in allCountries"
                      :key="country.code"
                      @click="selectCountry(country)"
                      class="language-option"
                    >
                      {{ country.name.split(' ')[0] }} (+{{ country.dialCode }})
                    </div>
                  </div>
                </div>
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
                <span class="label_title">{{$t('code_sent')}}</span>
                <span @click="state = 'phone'" class="change_phone"
                  >{{$t('change_number')}}</span
                >
              </div>
              <div class="otp-input">
                <input
                  v-for="(digit, index) in codeLength"
                  :key="index"
                  ref="codeInputs"
                  v-model="code[index]"
                  @input="onInput(index, $event)"
                  maxlength="1"
                  type="text"
                  @keypress="allowOnlyNumbers"
                  :class="{
                    'code-input': true,
                    is_check_error: InputField,
                  }"
                />
              </div>
              <!--                            v-maska-->
              <!--                            data-maska="#"-->
              <div class="login-button">
                <ButtonComponent
                  @click="sendData"
                  :name="getCodeText"
                  v-if="!isNewCode"
                />
                <button
                  v-else
                  class="btn"
                  @click.prevent="sendData"
                  :disabled="isDisabled"
                >
                  {{ $t("new_code") }}
                  <span v-if="countdown"
                    >{{ countdown }} {{ $t("seconds") }}.
                  </span>
                </button>
                <ButtonComponent
                  v-if="isShowError"
                  class="mt-8 neutral_btn"
                  @click="openModal"
                  :name="code_didnt_come"
                />

                <div class="invalid_code" v-if="isShowError">
                  <img src="@/assets/icons/error.svg" alt="" />
                  <span class="ml-8"> {{ $t("invalid_code") }}</span>
                </div>
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

    <ModalComponent />
  </div>
</template>

<script setup lang="ts">
import allCountries from "@/static/countries";
import LocaleSwitcher from "@/components/lang/LocaleSwitcher.vue";
import { ref, watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import ButtonComponent from "@/components/mini_components/ButtonComponent.vue";
import { vMaska } from "maska";
import store from "@/store";
import ModalComponent from "@/components/mini_components/ModalComponent.vue";
const form = ref({
  phone: "",
});
const isInputWritten = ref(false);
const isDisabled = ref(true);
const { t, locale } = useI18n();
const sendCodeText = ref(t("send_code"));
const getCodeText = ref(t("get_new_code"));
const code_didnt_come = ref(t("code_didnt_come"));
const state = ref("phone");
const isNewCode = ref(false);
const countdown = ref(10);
const initialCountdown = ref(10);
const timerStarted = ref(false);
const timerId = ref(0);
const InputField = ref(false);
const isShowError = ref(false);
const show = computed(() => store.getters.show);
const codeLength = 4; // Set the length of OTP code
const code = Array.from({ length: codeLength }, () => "");
const codeInputs = ref<HTMLInputElement[]>([]);
const selectedRegion = ref("+971");
const showRegions = ref(false);
const selectedRegionCountries = ref<HTMLInputElement[]>([]);

function toggleRegions() {
  showRegions.value = !showRegions.value;
}
function selectCountry(country: { name: string; dialCode: string }) {
  selectedRegion.value = `+${country.dialCode}`;
  showRegions.value = false;
  form.value.phone = ""; // Clear the input field value if needed
}

// Filter countries based on the selected region code
// function filterCountriesByRegion(regionCode:string) {
//   selectedRegionCountries.value = allCountries.filter(
//     (country) => country.dialCode === regionCode.replace("+", "")
//   );
// }
//
// filterCountriesByRegion(selectedRegion.value);
// const onInput = (index: number, event: KeyboardEvent) => {
//   const { keyCode, key } = event;
//
//   if (keyCode === 8) {
//     if (code[index] === "") {
//       if (index > 0) {
//         codeInputs.value[index - 1].focus();
//         code[index - 1] = "";
//       }
//     } else {
//       code[index] = "";
//     }
//   } else if (!isNaN(parseInt(key)) && index < codeLength - 1) {
//     code[index] = key;
//     codeInputs.value[index + 1]?.focus();
//   } else if (!isNaN(parseInt(key)) && index === codeLength - 1) {
//     code[index] = key;
//     codeInputs.value[index - 1]?.focus();
//
//   }
//   InputField.value = code.join("").length === 4;
// };

const verifyCode = () => {
  isShowError.value = code.join("").length === 4;
  InputField.value = code.join("").length === 4;
};
const openModal = () => {
  store.commit("setShow", true);
};
const onInput = (index: number, event: InputEvent) => {
  verifyCode();
  if (event.data !== null) {
    if (index < codeLength - 1) {
      codeInputs.value[index + 1].focus();
    }
  } else {
    if (index > 0) {
      codeInputs.value[index - 1].focus();
    }
  }
};
const allowOnlyNumbers = (event: KeyboardEvent) => {
  const charCode = event.keyCode;
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
};
const handleInput = () => {
  let phone = form.value.phone.replace(/-/g, "");
  isDisabled.value = phone.length !== 10;
  isInputWritten.value = !!(form.value.phone && form.value.phone !== "");
};
const startCountDown = () => {
  countdown.value = initialCountdown.value; // Reset countdown to initial value
  timerStarted.value = true;
  timerId.value = setInterval(() => {
    if (countdown.value <= 0) {
      clearInterval(timerId.value);
      timerStarted.value = false;
      isDisabled.value = false;
      isNewCode.value = false;
    } else {
      countdown.value--;
    }
  }, 1000);
};

//   send data
const sendData = () => {
  if (state.value === "phone") {
    // startCountDown();
    // isDisabled.value = true;
    state.value = "get_code";
  } else if (state.value === "get_code") {
    isNewCode.value = true;
    isDisabled.value = true;
    console.log(isNewCode.value);
    startCountDown();
    setTimeout(() => {
      codeInputs?.value[0]?.focus();
    }, 100);
  }
};

watch(locale, () => {
  sendCodeText.value = t("send_code");
  getCodeText.value = t("get_new_code");
  code_didnt_come.value = t("code_didnt_come");
});
</script>

<style scoped></style>
