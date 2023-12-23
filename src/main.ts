import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import en from "./locales/en";
import es from "./locales/es";
import de from "./locales/de";
import "@/assets/styles/global.css";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const i18n = createI18n({
  locale: "en",
  legacy: false,
  fallbackLocale: "en",
  messages: {
    en,
    es,
    de,
  },
});

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.component("VueDatePicker", VueDatePicker);
app.mount("#app");
