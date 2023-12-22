<template>
  <div class="home-parent">
    Main page
    Giselle Saint Claire
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        fullName: "",
        phone: "",
        plan: "standard_plus",
      },
      name_err: null,
      phone_err: null,
      message: "",
    };
  },

  methods: {
    preventNumber() {
      const inputValue = event.target.value;
      this.form.fullName = inputValue.replace(/[^A-Za-z\s]/g, "");
    },
    limitInput(event) {
      const inputValue = event.target.value;
      if (inputValue.length > 9) {
        event.preventDefault();
        this.form.phone = inputValue.slice(0, 9);
        return;
      }
      this.form.phone = inputValue;
    },
    preventE(event) {
      if (
        !/^[0-9]*$/.test(event.key) &&
        event.key !== "Backspace" &&
        event.key !== "Delete" &&
        event.key !== "ArrowLeft" &&
        event.key !== "ArrowRight" &&
        event.key !== "ArrowUp" &&
        event.key !== "ArrowDown" &&
        event.key !== "."
      ) {
        event.preventDefault();
      }
    },
  },
};
</script>

<script setup>
import { vMaska } from "maska";
import LoginComponent from "@/components/auth/loginComponent.vue";
import CookiesComponent from "@/components/mini_components/CookiesComponent.vue";
</script>
