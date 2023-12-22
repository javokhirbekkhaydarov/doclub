<template>
  <div class="locale_switcher">
    <div class="close_bg" @click="toggleCard" :class="{ active_bg: isCardVisible }"></div>
    <div
      class="current_lang d-flex align-items-center flex-end pointer"
      :class="{ active_lang: isCardVisible }"
      @click="toggleCard"
    >

      <svg v-if="!isCardVisible" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.6167 6.00016C12.6167 6.20016 12.55 6.3335 12.4167 6.46683L8.41671 10.4668C8.28337 10.5335 8.15004 10.6668 7.95004 10.6668C7.75004 10.6668 7.61671 10.6002 7.48337 10.4668L3.48337 6.46683C3.28337 6.20016 3.28337 5.80016 3.48337 5.5335C3.68337 5.26683 4.15004 5.26683 4.35004 5.5335L7.88337 9.06683L11.4167 5.5335C11.6167 5.46683 11.8167 5.3335 11.95 5.3335C12.0834 5.3335 12.2834 5.40016 12.4167 5.5335C12.55 5.66683 12.6167 5.86683 12.6167 6.00016Z" fill="#78708F"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.6166 6.00016C12.6166 6.20016 12.5499 6.3335 12.4166 6.46683L8.41658 10.4668C8.28325 10.5335 8.14992 10.6668 7.94992 10.6668C7.74992 10.6668 7.61659 10.6002 7.48325 10.4668L3.48325 6.46683C3.28325 6.20016 3.28325 5.80016 3.48325 5.5335C3.68325 5.26683 4.14992 5.26683 4.34992 5.5335L7.88325 9.06683L11.4166 5.5335C11.6166 5.46683 11.8166 5.3335 11.9499 5.3335C12.0833 5.3335 12.2833 5.40016 12.4166 5.5335C12.5499 5.66683 12.6166 5.86683 12.6166 6.00016Z" fill="#8365FE"/>
      </svg>
      {{ activeLang }}
    </div>
    <div v-if="isCardVisible" class="lang_card">
      <div class="lang_card_heading d-flex justify-content-between w100">
        <div class="lang_heading_text">{{ $t("select_lang") }}</div>
        <div>
          <img
            alt="close"
            src="@/assets/img/x.svg"
            class="pointer"
            style="width: 28px"
            @click.stop="toggleCard"
          />
        </div>
      </div>
      <div class="langs">
        <div
          v-for="(locale, code) in localeNames"
          :key="`locale-${code}`"
          @click="changeLocale(code)"
          :class="{ selected: $i18n.locale === code }"
          class="language-option"
        >
          {{ locale }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
interface LocaleNames {
  [key: string]: string;
}

const localeNames: LocaleNames = {
  en: "English",
  es: "Spanish",
  de: "German",
};

const isCardVisible = ref(false);

const changeLocale = (code: string) => {
  locale.value = code;
  isCardVisible.value = false;
};

const activeLang = computed(() => {
  return localeNames[locale.value];
});

const toggleCard = () => {
  isCardVisible.value = !isCardVisible.value;
};
</script>

<style>
.language-option {
  color: var(--Text-400, #78708f);

  /* Captions/Cap2 - Regular */
  font-family: Open-Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  cursor: pointer;
}

/*.language-option.selected {*/
/*  background-color: #eee;*/
/*}*/
.langs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  z-index: 99;
}
.lang_card {
  border-radius: 12px;
  background: #fff;
  margin-top: 8px;
  /* Modals */
  box-shadow: 0px 0px 15px 0px rgba(153, 153, 153, 0.2);
  display: flex;
  width: 270px;
  padding: 16px 16px 16px 20px;
  align-items: flex-start;
  gap: 8px;
  flex-direction: column;
  position: relative;
  z-index: 99;
}

.active_bg {
  z-index: 98;
  height: 100vh;
  background: transparent;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.lang_heading_text {
  color: var(--Text-500, #413663);

  /* Headers/H5 */
  font-family: Ubuntu-Medium, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
}
.current_lang {
  color: var(--Text-400, #78708f);
  text-align: center;
  /* Small/Description Regular */
  font-family: Open-Sans, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
}
.active_lang {
  color: var(--primary);
}
.active_lang img path {
  fill: var(--primary) !important;
  color: var(--primary);
}
@media screen and (max-width: 992px) {

  .lang_card {
    margin-top: 10px;
    width: 326px;
  }
  .select_regions {
    width: 326px !important;

  }
}
</style>
